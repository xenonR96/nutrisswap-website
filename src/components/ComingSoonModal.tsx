import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [ttqReady, setTtqReady] = useState(false);

  useEffect(() => {
    if (window.ttq) {
      window.ttq.ready(() => {
        setTtqReady(true);
      });
    }
  }, []);

  if (!isOpen) return null;

  const trackSubscription = async () => {
    try {
      // Track using TikTok's HTTP API
      const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
        method: 'POST',
        headers: {
          'Access-Token': import.meta.env.VITE_TIKTOK_ACCESS_TOKEN,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_source: 'web',
          event_source_id: 'D0ERFVRC77UD5RFHM9L0',
          data: [
            {
              event: 'Subscribe',
              event_time: Math.floor(Date.now() / 1000),
              event_id: 'subscribe_btn_click_001'
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to track event via HTTP API');
      }

      // Track using TikTok's JS SDK if it's ready
      if (ttqReady && window.ttq) {
        console.log('TikTok Subscribe event fired');
        window.ttq.track('Subscribe', {
          event_id: 'subscribe_btn_click_001'
        });
      }
    } catch (error) {
      console.error('Failed to track subscription:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      if (!supabase) {
        throw new Error('Email signup is not configured');
      }

      const { error } = await supabase
        .from('email_list')
        .insert([{ email }]);

      if (error) throw error;

      await trackSubscription();
      
      setStatus('success');
      setEmail('');
      
      // Redirect to App Store
      window.location.href = 'https://apps.apple.com/app/nutriswap/id6745822109';
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(
        error.code === '23505' 
          ? 'This email is already registered!' 
          : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✨</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get NutriSwap</h3>
          <p className="text-gray-600 mb-6">
            Join thousands of users making smarter food choices with NutriSwap!
          </p>
          <a
            href="https://apps.apple.com/app/nutriswap/id6745822109"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-2.5 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors text-center"
          >
            Download on the App Store
          </a>
        </div>
      </div>
    </div>
  );
}