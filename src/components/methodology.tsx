"use client";

import { useState } from "react";
import { methodologyStages } from "@/lib/site-data";

export function Methodology({ compact = false }: { compact?: boolean }) {
  const [activeStage, setActiveStage] = useState(0);
  const stage = methodologyStages[activeStage];

  return (
    <div className={compact ? "method-layout method-layout-compact" : "method-layout"}>
      <div className="stage-list" role="group" aria-label="Select a methodology stage">
        {methodologyStages.map((item, index) => (
          <button className={activeStage === index ? "stage active-stage" : "stage"} key={item.name} type="button" aria-pressed={activeStage === index} onClick={() => setActiveStage(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{item.name}</strong><span className="stage-plus" aria-hidden="true">{activeStage === index ? "−" : "+"}</span>
          </button>
        ))}
      </div>
      <div className="stage-detail" aria-live="polite">
        <span className="detail-kicker">STAGE {String(activeStage + 1).padStart(2, "0")}</span>
        <div className="detail-symbol" aria-hidden="true">S<span>.</span></div>
        <h3>{stage.name}</h3><p>{stage.detail}</p>
        <div className="detail-progress" aria-hidden="true"><span style={{ width: `${((activeStage + 1) / methodologyStages.length) * 100}%` }} /></div>
        <div className="detail-footer"><span>STRATFOLIO INTELLIGENCE FRAMEWORK</span><span>{activeStage + 1} / {methodologyStages.length}</span></div>
      </div>
    </div>
  );
}
