export interface StepItem {
  icon: string;
  title: string;
  description: string;
  tip?: string;
}

interface VisualStepFlowProps {
  steps: StepItem[];
  title?: string;
}

export default function VisualStepFlow({ steps, title }: VisualStepFlowProps) {
  return (
    <div className="not-prose my-8">
      {title && (
        <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-zinc-50">{title}</h3>
      )}
      <div className="flex flex-col gap-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 transition-all hover:border-primary/30 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            {/* Step Number */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white shadow-sm">
              {index + 1}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xl">{step.icon}</span>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-50">{step.title}</h4>
              </div>
              <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {step.description}
              </p>
              {step.tip && (
                <p className="mt-2 text-xs font-semibold text-primary bg-red-50 dark:bg-red-950/20 rounded-lg px-3 py-1.5 inline-block">
                  💡 {step.tip}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
