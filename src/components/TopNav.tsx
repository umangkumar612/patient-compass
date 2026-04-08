import { Settings, MoreVertical } from "lucide-react";

const navItems = ["Overview", "Patients", "Schedule", "Message", "Transactions"];

export default function TopNav() {
  return (
    <header className="flex items-center justify-between bg-card rounded-[70px] px-8 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl font-extrabold tracking-tight text-foreground">
          Tech<span className="text-nav-active">.Care</span>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item}
            className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              item === "Patients"
                ? "bg-nav-active text-primary-foreground"
                : "text-foreground hover:bg-muted"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <img
            src="https://fedskillstest.ct.digital/4.png"
            alt="Dr. Jose Simmons"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground">Dr. Jose Simmons</p>
            <p className="text-xs text-muted-foreground">General Practitioner</p>
          </div>
        </div>
        <div className="w-px h-10 bg-border" />
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-foreground" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <MoreVertical className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </header>
  );
}
