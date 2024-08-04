import TextReveal from "@/components/magicui/text-reveal";

export function ComponentTopic() {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-col grid-flow-row gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <TextReveal text="Climate Change: A Personal Journey" />
          </h1>

          <TextReveal
            text="Climate change is a global issue that affects us all, but it can
            feel distant and overwhelming. As you navigate the challenges of
            daily life, it's easy to push these concerns to the back of your
            mind. But the truth is, climate change is already impacting our
            lives in profound ways, whether we realize it or not."
          />
        </div>
        <div className="space-y-4">
          <TextReveal
            text="            Maybe you've noticed the weather becoming more unpredictable, with
            hotter summers, more intense storms, or longer droughts. Perhaps
            you've seen the effects on your local environment, with changes in
            the plants and animals you're used to seeing. Or maybe you've
            personally experienced the consequences, like disruptions to your
            work, travel, or daily routines."
          />
          <TextReveal
            text="            Whatever your experience, climate change is a deeply personal issue
            that touches all of our lives in unique ways. It's easy to feel
            powerless in the face of such a vast and complex challenge, but the
            truth is, we all have a role to play in addressing it."
          />
        </div>
      </div>
    </div>
  );
}
