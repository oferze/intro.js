import { reAlignHints } from "./hint";
import setHelperLayerPosition from "./setHelperLayerPosition";
import placeTooltip from "./placeTooltip";
import fetchIntroSteps from "./fetchIntroSteps";
import { _recreateBullets, _updateProgressBar } from "./showElement";
import { IntroJs } from "src/intro";

/**
 * Update placement of the intro objects on the screen
 * @api private
 */
export default function refresh(intro: IntroJs, refreshSteps?: boolean) {
  const referenceLayer = document.querySelector<HTMLElement>(
    ".introjs-tooltipReferenceLayer"
  );
  const helperLayer = document.querySelector<HTMLElement>(
    ".introjs-helperLayer"
  );
  const disableInteractionLayer = document.querySelector<HTMLElement>(
    ".introjs-disableInteraction"
  );

  // re-align intros
  setHelperLayerPosition(intro, helperLayer);
  setHelperLayerPosition(intro, referenceLayer);
  setHelperLayerPosition(intro, disableInteractionLayer);

  if (refreshSteps) {
    intro._introItems = fetchIntroSteps(intro, intro._targetElement);
    _recreateBullets(intro, intro._introItems[intro._currentStep]);
    _updateProgressBar(
      referenceLayer,
      intro._currentStep,
      intro._introItems.length
    );
  }

  // re-align tooltip
  if (intro._currentStep !== undefined && intro._currentStep !== null) {
    const oldArrowLayer = document.querySelector<HTMLElement>(".introjs-arrow");
    const oldTooltipContainer =
      document.querySelector<HTMLElement>(".introjs-tooltip");

    if (oldTooltipContainer && oldArrowLayer) {
      placeTooltip(
        intro,
        intro._introItems[intro._currentStep].element as HTMLElement,
        oldTooltipContainer,
        oldArrowLayer
      );
    }
  }

  //re-align hints
  reAlignHints(intro);

  return intro;
}
