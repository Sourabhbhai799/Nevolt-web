import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2, Loader2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type LeadModalProps = {
  children?: React.ReactNode;
  isDemoRequest?: boolean;
};

export function LeadModal({ children, isDemoRequest = false }: LeadModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    restaurant: '',
    email: '',
    countryCode: '+1',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const payload = {
      name: formData.name,
      restaurant: formData.restaurant,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      requestType: isDemoRequest ? 'Demo menu' : 'Custom menu',
    };

    console.log("Submitting lead data:", JSON.stringify(payload, null, 2));

    try {
      const response = await fetch('https://formspree.io/f/xdkozwng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
      // Fallback
      const subject = `New Menu Request${isDemoRequest ? ' (demo)' : ''}`;
      window.location.href = `mailto:newoltnow@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${formData.name}%0D%0ARestaurant: ${formData.restaurant}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.countryCode} ${formData.phone}`;
      setStatus('success');
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => setStatus('idle'), 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children || <Button size="lg">Get Your Custom Menu</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <div className="rounded-full bg-emerald-500/20 p-3 mb-6">
                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
              </div>
              <DialogTitle className="mb-2">Request Received</DialogTitle>
              <DialogDescription className="text-base">
                Thank you! Your request has been received. Our team will contact you shortly with your custom menu{isDemoRequest ? ' demo' : ''}.
              </DialogDescription>
              <Button className="mt-8 w-full" onClick={() => setIsOpen(false)} variant="outline">
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <DialogHeader>
                <DialogTitle>Let's Build Your Menu</DialogTitle>
                <DialogDescription>
                  Tell us about your restaurant and we'll be in touch within 24 hours.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input 
                    required 
                    placeholder="Jane Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Restaurant Name</label>
                  <Input 
                    required 
                    placeholder="Café Solano" 
                    value={formData.restaurant}
                    onChange={(e) => setFormData({...formData, restaurant: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input 
                    required 
                    type="email" 
                    placeholder="jane@cafesolano.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mobile Number</label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <select 
                        className="h-11 appearance-none rounded-md border border-white/10 bg-white/5 pl-3 pr-8 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                      >
                        <option value="+1">+1 (US)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+61">+61 (AU)</option>
                      </select>
                      <ChevronDown className="absolute right-2.5 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                    <Input 
                      required 
                      type="tel" 
                      placeholder="555-0123" 
                      className="flex-1"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-primary-foreground border-0"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                  {status === 'loading' ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
