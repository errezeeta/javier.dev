export interface IRole {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[][];
}

export default function Role({ role }: { role: IRole }) {
  return (
    <div className="Role flex flex-col gap-1 px-2 w-full min-w-0 box-border overflow-hidden">
      <h3 className="text-md font-bold print:text-md w-full">{role.title}</h3>
      <p className="text-md print:text-sm w-full">{role.company}</p>
      <p className="text-md print:text-sm w-full">{role.location}</p>
      <p className="text-md print:text-sm w-full">{role.startDate} - {role.endDate}</p>
      {role.description && (
        <p className="text-md print:text-sm w-full">{role.description}</p>
      )}
        {role.achievements.map((achievements, index) => (
          <div key={index} className="flex flex-col gap-1 w-full min-w-0">
            {achievements.map((achievement, index) => (
              <p key={index} className="text-md print:text-sm break-all w-full">
                • {achievement}
              </p>
            ))}
          </div>
        ))}
    </div>
  );
}
