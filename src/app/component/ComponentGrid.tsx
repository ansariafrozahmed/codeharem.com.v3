import type { ComponentData } from "@/content/components";
import ComponentCard from "@/components/component/ComponentCard";

interface Props {
  components: ComponentData[];
}

export default function ComponentGrid({ components }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {components.map((component) => (
        <ComponentCard key={component.id} component={component} />
      ))}
    </div>
  );
}
