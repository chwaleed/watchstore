import React, { useState, ReactNode, CSSProperties } from "react";

// Types for the stepper component
export interface StepperStep {
  id: string;
  label: string;
  icon?: ReactNode;
  content?: ReactNode;
  isOptional?: boolean;
}

export interface StepperStyles {
  // Container styles
  container?: string;
  stepperHeader?: string;
  stepperContent?: string;
  navigationContainer?: string;

  // Step styles
  stepContainer?: string;
  stepCircle?: string;
  stepLabel?: string;
  stepConnection?: string;

  // State-specific styles
  completedStep?: {
    circle?: string;
    label?: string;
    connection?: string;
  };
  activeStep?: {
    circle?: string;
    label?: string;
    connection?: string;
  };
  inactiveStep?: {
    circle?: string;
    label?: string;
    connection?: string;
  };

  // Button styles
  nextButton?: string;
  previousButton?: string;
  skipButton?: string;
  buttonContainer?: string;
  leftButtonContainer?: string;
  rightButtonContainer?: string;
}

export interface StepperProps {
  steps: StepperStep[];
  currentStep?: number;
  onStepChange?: (stepIndex: number) => void;
  onComplete?: () => void;
  allowClickableSteps?: boolean;

  // Button visibility controls
  showNextButton?: boolean;
  showPreviousButton?: boolean;
  showSkipButton?: boolean;
  showButtons?: boolean; // Master control for all buttons

  // Custom button renderers
  renderNextButton?: (props: {
    onClick: () => void;
    disabled: boolean;
    isLastStep: boolean;
  }) => ReactNode;
  renderPreviousButton?: (props: {
    onClick: () => void;
    disabled: boolean;
  }) => ReactNode;
  renderSkipButton?: (props: {
    onClick: () => void;
    canSkip: boolean;
  }) => ReactNode;

  // Styling
  className?: string;
  styles?: StepperStyles;
  customStyles?: {
    container?: CSSProperties;
    stepperHeader?: CSSProperties;
    stepperContent?: CSSProperties;
    navigationContainer?: CSSProperties;
  };

  // Color themes (for backward compatibility)
  completedColor?: string;
  activeColor?: string;
  inactiveColor?: string;

  // Button text
  nextButtonText?: string;
  previousButtonText?: string;
  skipButtonText?: string;
  completeButtonText?: string;

  // Layout options
  orientation?: "horizontal" | "vertical";
  showLabels?: boolean;
  showConnections?: boolean;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep = 0,
  onStepChange,
  onComplete,
  allowClickableSteps = false,

  // Button visibility
  showNextButton = true,
  showPreviousButton = true,
  showSkipButton = true,
  showButtons = true,

  // Custom renderers
  renderNextButton,
  renderPreviousButton,
  renderSkipButton,

  // Styling
  className = "",
  styles = {},
  customStyles = {},

  // Legacy color support
  completedColor = "teal",
  activeColor = "teal",
  inactiveColor = "gray",

  // Button text
  nextButtonText = "Next",
  previousButtonText = "Previous",
  skipButtonText = "Skip",
  completeButtonText = "Complete",

  // Layout
  orientation = "horizontal",
  showLabels = true,
  showConnections = true,
}) => {
  const [internalCurrentStep, setInternalCurrentStep] = useState(currentStep);

  const activeStep = onStepChange ? currentStep : internalCurrentStep;

  const handleStepChange = (stepIndex: number) => {
    if (onStepChange) {
      onStepChange(stepIndex);
    } else {
      setInternalCurrentStep(stepIndex);
    }
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      handleStepChange(activeStep + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      handleStepChange(activeStep - 1);
    }
  };

  const handleSkip = () => {
    if (activeStep < steps.length - 1) {
      handleStepChange(activeStep + 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    if (allowClickableSteps && stepIndex <= activeStep) {
      handleStepChange(stepIndex);
    }
  };

  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < activeStep) return "completed";
    if (stepIndex === activeStep) return "active";
    return "inactive";
  };

  const getDefaultColorClasses = (status: string) => {
    switch (status) {
      case "completed":
        return {
          circle: `bg-${completedColor}-600 border-${completedColor}-600 text-white`,
          label: `text-${completedColor}-600`,
          connection: `border-${completedColor}-600`,
        };
      case "active":
        return {
          circle: `bg-${activeColor}-600 border-${activeColor}-600 text-white`,
          label: `text-${activeColor}-600`,
          connection: `border-${inactiveColor}-300`,
        };
      default:
        return {
          circle: `border-${inactiveColor}-300 text-${inactiveColor}-500`,
          label: `text-${inactiveColor}-500`,
          connection: `border-${inactiveColor}-300`,
        };
    }
  };

  const getStepClasses = (stepIndex: number) => {
    const status = getStepStatus(stepIndex);
    const defaultClasses = getDefaultColorClasses(status);
    const customStepStyles = styles[
      `${status}Step` as keyof StepperStyles
    ] as Partial<StepperStyles>;

    return {
      circle:
        (
          customStepStyles as StepperStyles[
            | "completedStep"
            | "activeStep"
            | "inactiveStep"]
        )?.circle ||
        styles.stepCircle ||
        defaultClasses.circle,
      label:
        (
          customStepStyles as StepperStyles[
            | "completedStep"
            | "activeStep"
            | "inactiveStep"]
        )?.label ||
        styles.stepLabel ||
        defaultClasses.label,
      connection:
        (
          customStepStyles as StepperStyles[
            | "completedStep"
            | "activeStep"
            | "inactiveStep"]
        )?.connection ||
        styles.stepConnection ||
        defaultClasses.connection,
    };
  };

  const DefaultIcon = ({ className }: { className?: string }) => (
    <div className={`w-6 h-6 rounded-full bg-current ${className}`} />
  );

  const renderDefaultNextButton = () => (
    <button
      onClick={handleNext}
      className={
        styles.nextButton ||
        `text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-${activeColor}-600 bg-${activeColor}-600 text-${activeColor}-100 
        border duration-200 ease-in-out border-${activeColor}-600 transition`
      }
    >
      {activeStep === steps.length - 1 ? completeButtonText : nextButtonText}
    </button>
  );

  const renderDefaultPreviousButton = () => (
    <button
      onClick={handlePrevious}
      disabled={activeStep === 0}
      className={
        styles.previousButton ||
        `text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-${inactiveColor}-200 bg-${inactiveColor}-100 text-${inactiveColor}-700 
        border duration-200 ease-in-out border-${inactiveColor}-600 transition
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`
      }
    >
      {previousButtonText}
    </button>
  );

  const renderDefaultSkipButton = () => (
    <button
      onClick={handleSkip}
      className={
        styles.skipButton ||
        `text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-${activeColor}-200 bg-${activeColor}-100 text-${activeColor}-700 
        border duration-200 ease-in-out border-${activeColor}-600 transition`
      }
    >
      {skipButtonText}
    </button>
  );

  const containerClass =
    orientation === "horizontal"
      ? "flex items-center"
      : "flex flex-col items-start";
  const stepLayoutClass =
    orientation === "horizontal"
      ? "flex items-center relative"
      : "flex items-start mb-8 relative";
  const connectionClass =
    orientation === "horizontal"
      ? "flex-auto border-t-2 transition duration-500 ease-in-out"
      : "absolute left-6 top-12 w-0.5 h-16 border-l-2 transition duration-500 ease-in-out";

  return (
    <div
      className={`${styles.container || "p-5"} ${className}`}
      style={customStyles.container}
    >
      {/* Stepper Header */}
      <div
        className={styles.stepperHeader || "mx-4 p-4"}
        style={customStyles.stepperHeader}
      >
        <div className={containerClass}>
          {steps.map((step, index) => {
            const stepClasses = getStepClasses(index);
            const isClickable = allowClickableSteps && index <= activeStep;

            return (
              <React.Fragment key={step.id}>
                <div className={styles.stepContainer || stepLayoutClass}>
                  <div
                    className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center border-2 ${
                      stepClasses.circle
                    } ${isClickable ? "cursor-pointer hover:scale-105" : ""}`}
                    onClick={() => handleStepClick(index)}
                  >
                    {step.icon || <DefaultIcon />}
                  </div>

                  {showLabels && (
                    <div
                      className={`${
                        orientation === "horizontal"
                          ? "absolute top-0 -ml-10 text-center mt-16 w-32"
                          : "ml-4 mt-3"
                      } text-xs font-medium uppercase ${stepClasses.label}`}
                    >
                      {step.label}
                      {step.isOptional && (
                        <span className="block text-xs normal-case">
                          (Optional)
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Connection line */}
                {showConnections && index < steps.length - 1 && (
                  <div
                    className={`${connectionClass} ${stepClasses.connection}`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div
        className={styles.stepperContent || "mt-8 p-4"}
        style={customStyles.stepperContent}
      >
        {steps[activeStep]?.content || (
          <div className="text-center py-8 text-gray-500">
            No content provided for step: {steps[activeStep]?.label}
          </div>
        )}

        {/* Navigation Buttons */}
        {showButtons && (
          <div
            className={
              styles.navigationContainer ||
              styles.buttonContainer ||
              "flex p-2 mt-4"
            }
            style={customStyles.navigationContainer}
          >
            <div className={styles.leftButtonContainer || ""}>
              {showPreviousButton &&
                (renderPreviousButton
                  ? renderPreviousButton({
                      onClick: handlePrevious,
                      disabled: activeStep === 0,
                    })
                  : renderDefaultPreviousButton())}
            </div>

            <div
              className={
                styles.rightButtonContainer || "flex-auto flex flex-row-reverse"
              }
            >
              {showNextButton &&
                (renderNextButton
                  ? renderNextButton({
                      onClick: handleNext,
                      disabled: false,
                      isLastStep: activeStep === steps.length - 1,
                    })
                  : renderDefaultNextButton())}

              {showSkipButton &&
                activeStep < steps.length - 1 &&
                steps[activeStep]?.isOptional &&
                (renderSkipButton
                  ? renderSkipButton({
                      onClick: handleSkip,
                      canSkip: steps[activeStep]?.isOptional || false,
                    })
                  : renderDefaultSkipButton())}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
