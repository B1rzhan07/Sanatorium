import React from 'react';
import { Button } from '~/components/ui/button';
export function PropertyInfo() {
  return (
    <div>
      <div>
        Sauna room with 65 square meters. Cabin with electricity, shower, indoor toilet and kitchen.
        Located on the shore of a clean Lake Kiantajärvi on the edge of the desert. Enjoy your own
        peace and the quiet of nature. The stream&apos;s solo belongs on the terrace. Paradise of
        nature.
      </div>

      <Button variant={'link'} className="p-0">
        Show more
      </Button>
    </div>
  );
}
