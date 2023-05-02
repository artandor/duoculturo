"use client";
import {Button} from "@/components/components/override/material";
import {ClientSafeProvider, signIn} from "next-auth/react";

interface Props {
    provider: ClientSafeProvider,
}

export default function AuthProviderButton({provider}: Props) {
    return (
        <Button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
        </Button>
    )
}