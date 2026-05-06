
import Topbar  from "@/components/dashboard/Topbar";

// ── Shared sub-components ────────────────────────────────────────────────────

function SectionCard({ title, subtitle, borderRed = false, headerRed = false, children }) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden border ${borderRed ? "border-red-200" : "border-gray-100"}`}>
      <div className={`px-5 py-3.5 border-b ${headerRed ? "bg-red-50 border-red-100" : "border-gray-100"}`}>
        <p className={`text-sm font-medium ${headerRed ? "text-red-600" : "text-black"}`}>{title}</p>
        <p className="text-[10px] text-gray-400 mt-0.5">{subtitle}</p>
      </div>
      <div className="px-5 py-5 flex flex-col gap-4">{children}</div>
    </div>
  );
}

function Field({ label, id, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[10px] font-medium text-gray-500">{label}</label>
      {children}
    </div>
  );
}

const INPUT_CLS =
  "w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-black placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors";

// ── Settings side-nav items ──────────────────────────────────────────────────

const SNAV = [
  {
    id: "profile",
    label: "Profile",
    icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>,
  },
  {
    id: "password",
    label: "Password",
    icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>,
  },
  {
    id: "danger",
    label: "Danger zone",
    icon: <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>,
  },
];

// ── Notification toggles ─────────────────────────────────────────────────────

const NOTIFICATIONS = [
  { id: "missedCall",  label: "Missed call alerts",     desc: "Get notified when a call is missed",       defaultOn: true  },
  { id: "newLead",     label: "New lead captured",      desc: "Alert when a new lead is saved",           defaultOn: true  },
  { id: "newChat",     label: "New chat session",       desc: "Notify when a visitor starts a chat",      defaultOn: false },
  { id: "weeklyReport",label: "Weekly summary report",  desc: "Email digest every Monday morning",        defaultOn: false },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar activePath="/dashboard/settings" /> */}

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar title="Settings" subtitle="Manage your account preferences" />

        <div className="flex flex-1 overflow-hidden">

          {/* ── Settings side-nav ── */}
          <aside className="w-44 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col gap-1 p-3">
            {SNAV.map((item, idx) => (
              /*
                Side nav items — onClick tum likhna:
                active section ka state set karo (useState)
                ya anchor links use karo (#profile, #password …)
              */
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors ${
                  idx === 0
                    ? "bg-green-50 text-green-600 font-medium"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </aside>

          {/* ── Settings body ── */}
          <main className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">

            {/* ── Profile ── */}
            <div id="profile">
              <SectionCard
                title="Profile information"
                subtitle="Update your name, company and industry"
              >
                {/* Avatar row */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-base font-medium flex-shrink-0">
                    JD
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Profile picture</p>
                    {/*
                      Change photo button — onClick tum likhna
                      file input trigger karo, image upload karo
                    */}
                    <button
                      type="button"
                      className="text-[10px] px-3 py-1.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
                    >
                      Change photo
                    </button>
                  </div>
                </div>

                {/*
                  Profile form — onSubmit tum likhna
                  PATCH /api/auth/me  with { name, email, company, industry }
                */}
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="First name" id="firstName">
                      <input id="firstName" name="firstName" type="text" defaultValue="John" className={INPUT_CLS} />
                    </Field>
                    <Field label="Last name" id="lastName">
                      <input id="lastName" name="lastName" type="text" defaultValue="Doe" className={INPUT_CLS} />
                    </Field>
                  </div>

                  <Field label="Email address" id="email">
                    <input id="email" name="email" type="email" defaultValue="john@acme.com" className={INPUT_CLS} />
                  </Field>

                  

                  {/* Save button — onSubmit tum likhna */}
                  <button
                    type="submit"
                    className="self-start px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    Save changes
                  </button>
                </form>
              </SectionCard>
            </div>

            {/* ── Password ── */}
            <div id="password">
              <SectionCard
                title="Change password"
                subtitle="Use a strong password with at least 8 characters"
              >
                {/*
                  Password form — onSubmit tum likhna
                  PATCH /api/auth/change-password
                  body: { currentPassword, newPassword, confirmPassword }
                  validate: newPassword === confirmPassword
                */}
                <form className="flex flex-col gap-4">
                  <Field label="Current password" id="currentPassword">
                    <input
                      id="currentPassword"
                      name="currentPassword"
                      type="password"
                      placeholder="Enter current password"
                      className={INPUT_CLS}
                    />
                  </Field>

                  <div className="grid grid-cols-2 gap-3">
                    <Field label="New password" id="newPassword">
                      <input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        placeholder="Min. 8 characters"
                        className={INPUT_CLS}
                      />
                    </Field>
                    <Field label="Confirm new password" id="confirmPassword">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Re-enter password"
                        className={INPUT_CLS}
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="self-start px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    Update password
                  </button>
                </form>
              </SectionCard>
            </div>

            {/* ── Notifications ── */}
            <div id="notifications">
              <SectionCard
                title="Notification preferences"
                subtitle="Choose what alerts you receive and how"
              >
                <div className="flex flex-col divide-y divide-gray-50">
                  {NOTIFICATIONS.map((n) => (
                    <div key={n.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                      <div>
                        <p className="text-xs font-medium text-black">{n.label}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{n.desc}</p>
                      </div>
                      {/*
                        Toggle — onClick tum likhna
                        PATCH /api/auth/notifications
                        body: { [n.id]: true/false }
                      */}
                      <div
                        className={`relative w-8 h-[18px] rounded-full cursor-pointer flex-shrink-0 transition-colors ${
                          n.defaultOn ? "bg-green-500" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`absolute top-[3px] w-3 h-3 rounded-full bg-white shadow transition-all ${
                            n.defaultOn ? "left-[17px]" : "left-[3px]"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </div>

            {/* ── Danger Zone ── */}
            <div id="danger">
              <SectionCard
                title="Danger zone"
                subtitle="These actions are permanent and cannot be undone"
                borderRed
                headerRed
              >
                {/* Export data */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-black">Export all data</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      Download a copy of all your call logs, chats and leads
                    </p>
                  </div>
                  {/*
                    Export button — onClick tum likhna
                    GET /api/export → download ZIP/CSV
                  */}
                  <button
                    type="button"
                    className="flex-shrink-0 px-4 py-1.5 border border-gray-300 rounded-lg text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    Export data
                  </button>
                </div>

                <div className="h-px bg-red-100" />

                {/* Delete account */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-black">Delete account</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  {/*
                    Delete button — onClick tum likhna
                    confirm modal dikhao pehle
                    DELETE /api/auth/account
                    phir logout karo aur / pe redirect karo
                  */}
                  <button
                    type="button"
                    className="flex-shrink-0 px-4 py-1.5 border border-red-300 rounded-lg text-xs text-red-500 hover:bg-red-50 transition-colors"
                  >
                    Delete account
                  </button>
                </div>
              </SectionCard>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
