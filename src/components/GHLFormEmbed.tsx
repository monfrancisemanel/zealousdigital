import React, { useEffect } from "react";

type Props = {
  className?: string;
};

const SCRIPT_SRC = "https://admin.theiconicimpact.com/js/form_embed.js";

const GHLFormEmbed: React.FC<Props> = ({ className = "" }) => {
  useEffect(() => {
    // Load the embed script once
    const alreadyLoaded = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (alreadyLoaded) return;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={className}>
      <iframe
        src="https://admin.theiconicimpact.com/widget/form/xm0AJcsOmI4mVO4ag2So"
        style={{
          width: "100%",
          height: 696, // matches data-height
          border: "none",
          borderRadius: 3,
        }}
        id="inline-xm0AJcsOmI4mVO4ag2So"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Zealous DGTL"
        data-height="696"
        data-layout-iframe-id="inline-xm0AJcsOmI4mVO4ag2So"
        data-form-id="xm0AJcsOmI4mVO4ag2So"
        title="Zealous DGTL"
      />
    </div>
  );
};

export default GHLFormEmbed;
