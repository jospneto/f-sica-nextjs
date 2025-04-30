'use client';

import TextInput from "@/components/TextInput";

export const Feed = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-500 to-blue-300 gap-4">
      <h1>Feed</h1>
      <TextInput.Root>
        <TextInput.Label label="Email" />
        <TextInput.Item value="" inputClassName="bg-white" placeholder="Digite seu e-mail" onChange={value => console.log(value)}/>
      </TextInput.Root>
    </div>
  );
};
