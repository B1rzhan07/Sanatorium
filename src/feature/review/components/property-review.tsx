import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Star } from 'lucide-react';

export function PropertyReview() {
  return (
    <div className="p-4 space-y-4 border rounded-2xl">
      <div className=" flex items-center justify-between ">
        <div className=" flex items-center gap-4">
          <Avatar>
            <>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AS</AvatarFallback>
            </>
          </Avatar>
          <div className="font-semibold">Ansar S</div>
        </div>

        <div className="flex items-center gap-2">
          <Star fill="black" size={16} /> <span className="text-sm">4.69</span>
        </div>
      </div>

      <div>
        Amazing place and whole &quot;village&quot; feeling. We loved common areas as well as our
        own cosy cabin. The design, attitude, and spirit it is just stunning. More places in the
        world like this one...
      </div>

      <Button variant="link" className="p-0">
        Show more
      </Button>
    </div>
  );
}
