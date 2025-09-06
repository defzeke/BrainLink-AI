import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="overflow-hidden p-0">
				<CardContent className="grid p-0 md:grid-cols-2">
					<form className="p-6 md:p-8">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center text-center">
								<h1 className="text-2xl font-bold">Create your account</h1>
								<p className="text-muted-foreground text-balance">
									Register for your Acme Inc account
								</p>
							</div>
							<div className="grid gap-3">
								<Label htmlFor="name">Name</Label>
								<Input id="name" type="text" placeholder="Your Name" required />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="m@example.com" required />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="password">Password</Label>
								<Input id="password" type="password" required />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="confirm-password">Confirm Password</Label>
								<Input id="confirm-password" type="password" required />
							</div>
							<Button type="submit" className="w-full">
								Register
							</Button>
							<div className="text-center text-sm">
								Already have an account?{" "}
								<a href="/login" className="underline underline-offset-4">
									Login
								</a>
							</div>
						</div>
					</form>
					<div className="bg-muted relative hidden md:block">
						<img
							src="/hi.jpg"
							alt="image"
							className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                            draggable='false'
						/>
					</div>
				</CardContent>
			</Card>
			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
				and <a href="#">Privacy Policy</a>.
			</div>
		</div>
	)
}
