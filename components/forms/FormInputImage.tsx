import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import Image from "next/image";
import { ReactNode } from "react";

const FormInputImage = ({
  children,
  src,
}: {
  children: ReactNode;
  src: string;
}) => {
  return (
    <FormItem className="flex items-center gap-4">
      <FormLabel className="account-form_image-label">
        {src ? (
          <Image
            className="rounded-full object-contain"
            src={src}
            alt="profile photo"
            width={96}
            height={96}
            priority
          />
        ) : (
          <Image
            className="object-contain"
            src="/assets/profile.svg"
            alt="profile photo"
            width={24}
            height={24}
          />
        )}
      </FormLabel>
      <FormControl className="flex-1 text-base-semibold text-gray-200">
        {children}
      </FormControl>
    </FormItem>
  );
};

export default FormInputImage;
