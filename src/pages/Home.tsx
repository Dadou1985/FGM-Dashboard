import { UsersPage } from "./UserPages";

export function Home() {
    return (
        <div className="min-h-screen p-12">
            <header className="mb-6">
            <h1 className="text-sm font-bold px-6">Tableau de bord</h1>
            </header>
            <UsersPage />
        </div>
    )
}