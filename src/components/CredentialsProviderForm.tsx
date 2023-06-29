"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const CredentialsProviderForm = () => {
  return (
    <form onSubmit={(data) => console.log(data)}>
      <div className="space-y-2">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="hello@me.com"
          autoComplete="email"
          required
        />
      </div>
      <Button type="submit" variant="outline" className="mt-3 w-full">
        Continue with email
      </Button>
    </form>
  );
};
