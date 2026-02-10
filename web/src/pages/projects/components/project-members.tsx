import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const teamMembers = [
	{ name: "Alice Smith", email: "alice.smith@miit.edu.mm", initials: "AS" },
	{ name: "Bob Johnson", email: "bob.johnson@miit.edu.mm", initials: "BJ" },
	{ name: "Carol White", email: "carol.white@miit.edu.mm", initials: "CW" },
	{ name: "Carol White", email: "carol.white@miit.edu.mm", initials: "CW" },
];

export default function ProjectMembers() {
	return (
		<Card className="shadow-sm my-5">
			<CardHeader>
				<p className="text-lg font-semibold">Project Members</p>
				<p className="text-sm -mt-2 text-muted-foreground">
					Students working on this project
				</p>
			</CardHeader>
			<CardContent className="flex flex-wrap gap-4">
				{teamMembers.map((member) => (
					<div
						key={member.email}
						className="flex items-center gap-4 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
						<Avatar className="h-12 w-12 border-none">
							<AvatarFallback className="bg-muted font-medium">
								{member.initials}
							</AvatarFallback>
						</Avatar>
						<div className="space-y-1">
							<p className="text-sm font-semibold leading-none">
								{member.name}
							</p>
							<p className="text-xs text-muted-foreground truncate">
								{member.email}
							</p>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
