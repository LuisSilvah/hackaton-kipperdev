import TextReveal from "@/components/magicui/text-reveal";

export const ComponentTopic = ({ ...props }) => {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        className="flex flex-col grid-flow-row gap-8 md:grid-cols-2 lg:gap-12"
        {...props}
      ></div>
    </div>
  );
};
