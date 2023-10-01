"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserValidation } from "@/lib/validations/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "../ui/textarea";
import FormInputDefault from "./FormInputDefault";
import FormInputImage from "./FormInputImage";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";

interface props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: props) => {
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image ? user.image : "",
      name: user?.name ? user.name : "",
      username: user?.username ? user.username : "",
      bio: user?.bio ? user.bio : "",
    },
  });

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return; //if file type is not image

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

   const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;
    const hasImageChanged = isBase64Image(blob);

    if (hasImageChanged) {
      const imgres = await startUpload(files);

      if (imgres && imgres[0].fileUrl) {
        values.profile_photo = imgres[0].fileUrl;
      }
    }

    // Update User Profile
    try {
      await updateUser({
        userId: user.id,
        username: values.username,
        name: values.name,
        bio: values.bio,
        image: values.profile_photo,
        path: pathname,
      });

      if (pathname === "/profile/edit") {
        router.back();
      } else {
        router.push("/");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        {/* Uploading Image */}
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormInputImage src={field.value}>
              <Input
                className="account-form_image-input"
                type="file"
                accept="image/*"
                placeholder="Upload a photo"
                onChange={(e) => handleImage(e, field.onChange)}
              />
            </FormInputImage>
          )}
        />

        {/* Updating Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormInputDefault label="name">
              <Input
                className="account-form_input no-focus"
                type="text"
                placeholder="Name"
                {...field}
              />
            </FormInputDefault>
          )}
        />

        {/* Adding username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormInputDefault label="username">
              <Input
                className="account-form_input no-focus"
                type="text"
                placeholder="Username"
                {...field}
              />
            </FormInputDefault>
          )}
        />

        {/* Adding Bio */}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormInputDefault label="bio">
              <Textarea
                className="account-form_input no-focus"
                rows={10}
                placeholder="Bio"
                {...field}
              />
            </FormInputDefault>
          )}
        />
        <Button type="submit" className="bg-primary-500">
          {btnTitle}
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
