"use client";
import { useEffect, useState } from "react";
export default function FloorScheduleCalendar({ setDoneLoading }) {
  const [onClient, setOnClient] = useState(false);
  useEffect(() => {
    setOnClient(true);
  }, []);
  return (
    <div>
      {/* <div className="h-20"></div> */}
      {onClient && (
        <div className="pl-4 pr-4 //pb-4">
          <iframe
            src="https://embed.styledcalendar.com/#5yuNF3LX1f4W61kZRXMZ"
            title="Styled Calendar"
            className="styled-calendar-container"
            style={{ width: "100%", border: "none" }}
            data-cy="calendar-embed-iframe"
            // loading="eager"
            onLoad={() => setDoneLoading(true)}
          ></iframe>
          <script
            async
            type="module"
            src="https://embed.styledcalendar.com/assets/parent-window.js"
          ></script>
        </div>
      )}
    </div>
  );
}
