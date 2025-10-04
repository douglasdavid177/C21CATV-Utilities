"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [onClient, setOnClient] = useState(false);
  useEffect(() => {
    setOnClient(true);
  }, []);
  return (
    <div>
      <div className="h-16"></div>
      {onClient && (
        <div className="grow">
          <iframe
            src="https://embed.styledcalendar.com/#5yuNF3LX1f4W61kZRXMZ"
            title="Styled Calendar"
            className="styled-calendar-container"
            //style="width: 100%; border: none;"
            style={{ width: "100%", border: "none" }}
            data-cy="calendar-embed-iframe"
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
