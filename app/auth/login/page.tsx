import {ClientSafeProvider, getProviders} from "next-auth/react"
import {getServerSession} from "next-auth/next"
import {authOptions} from "@/components/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import AuthProviderButton from "@/components/components/AuthProviderButton";

export default async function page() {
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect('/');
    }

    // @ts-ignore
    let providers: ClientSafeProvider = await getProviders();
    providers = providers ?? []

    return (
        <div className="mx-auto h-screen grid content-center">
            {Object.values(providers).map((provider: ClientSafeProvider) => (
                <div key={provider.name} className="text-center mb-2">
                    <AuthProviderButton provider={provider}/>
                </div>
            ))}
        </div>
    )
}
