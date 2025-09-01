import { HTMLTable } from "@blueprintjs/core";

const BuildInfo: React.FC<BuildInfoProps> = ({ buildVersion }) => {
  const items = [
    {
      name: "Build Version",
      value: buildVersion,
    },
  ];

  return (
    <HTMLTable aria-label="Build Info">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx}>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
};

export default BuildInfo;
