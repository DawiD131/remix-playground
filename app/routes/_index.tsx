import type { MetaFunction } from "@remix-run/node";
import Form from "~/components/Form";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      <Form />
    </div>
  );
}
