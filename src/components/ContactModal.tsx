
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-primary">
            Mensagem Enviada!
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Obrigado pelo seu contato. Retornaremos em breve!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <Button onClick={onClose} className="w-full">
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
