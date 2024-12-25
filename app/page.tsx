"use client";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();

  return (
    <Button>
      <ButtonText>Hello</ButtonText>
    </Button>
  );
};

export default Page;
