import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ReactNode } from "react";

const FormInputDefault = ({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) => {
  return (
    <FormItem className="flex flex-col w-full gap-3">
      {label && (
        <FormLabel className="text-base-semibold text-light-2 capitalize">
          {label}
        </FormLabel>
      )}
      <FormControl className="flex-1 text-base-semibold text-gray-200">
        {children}
      </FormControl>
    </FormItem>
  );
};

export default FormInputDefault;