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
    <div className="Role flex flex-col gap-1 px-2 overflow-hidden">
      <h3 className="text-md font-bold print:text-md">{role.title}</h3>
      <p className="text-md print:text-sm">{role.company}</p>
      <p className="text-md print:text-sm">{role.location}</p>
      <p className="text-md print:text-sm">{role.startDate} - {role.endDate}</p>
      {role.description && (
        <p className="text-md print:text-sm">{role.description}</p>
      )}
        {role.achievements.map((achievements, index) => (
          <ul key={index} className="list-disc list-outside ml-4 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-md print:text-sm break-words">
                {achievement}
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}
