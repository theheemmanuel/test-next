import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SocialProps {
  selectedSocial: string;
}

const SocialModal: React.FC<SocialProps> = ({ selectedSocial }) => {
  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedSocial}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default SocialModal;
