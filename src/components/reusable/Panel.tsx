/*
////////////////////
// Usage:
  { children } [required, plain text || JSX element]
    -> the content shows in Panel
  { className } [optional]
    -> className
  { ...rest } [optional]
    -> additional prop


// Example:
  <Panel className="accordion-panel">
    <Accordion />
  </Panel>

////////////////////
*/

interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

function Panel({ children, className, ...rest }: PanelProps) {
  return (
    <div {...rest} className={"Panel" + (className ? " " + className : "")}>
      {children}
    </div>
  );
}

export default Panel;
