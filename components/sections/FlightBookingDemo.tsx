import type { ReactNode } from 'react'
import {
  Apple,
  ArrowRight,
  Calendar,
  CircleCheck,
  CreditCard,
  Download,
  Facebook,
  Github,
  Lock,
  Mail,
  Plane,
  QrCode,
  Search,
  Share2,
  Shield,
  Users,
} from 'lucide-react'

const tripTabs = ['One way', 'Round trip', 'Multi-city']

export function FlightBookingHome() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Plane size={14} className="text-accent-cyan" />
          <span className="font-display font-bold text-text-primary text-xs">Sahl Air</span>
        </div>
        <nav className="flex items-center gap-3 font-mono text-[10px] text-text-muted">
          <span className="text-accent-cyan">Flights</span>
          <span>Hotels</span>
          <span>Cars</span>
        </nav>
      </div>

      <div className="mt-1">
        <h3 className="font-display font-bold text-text-primary text-base sm:text-lg leading-tight">
          Where to next?
        </h3>
        <p className="font-mono text-[10px] text-text-muted">
          Search flights to 800+ destinations
        </p>
      </div>

      <div className="rounded-lg bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-2.5 shadow-lg shadow-black/20">
        <div className="flex items-center gap-1.5">
          {tripTabs.map((t, i) => (
            <span
              key={t}
              className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${
                i === 0
                  ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                  : 'text-text-muted border border-border-default'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Field label="From" value="DXB · Dubai" />
          <Field label="To" value="LHR · London" />
          <Field label="Depart" value="Mon · Oct 14" />
          <Field label="Return" value="Sun · Oct 20" />
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-bg-secondary/60 border border-border-default font-mono text-[10px] text-text-secondary">
            <Users size={10} className="text-accent-cyan" />
            1 Adult · Economy
          </div>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-cyan text-bg-primary font-mono text-[10px] font-bold"
          >
            <Search size={10} /> Search
          </button>
        </div>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap mt-auto">
        <span className="font-mono text-[10px] text-text-muted">// popular:</span>
        {['DXB → LHR', 'DXB → JFK', 'DXB → BOM'].map((r) => (
          <span
            key={r}
            className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-bg-secondary/60 border border-border-default text-text-secondary"
          >
            {r}
          </span>
        ))}
      </div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 px-2 py-1.5 rounded-md bg-bg-secondary/60 border border-border-default">
      <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
        {label}
      </span>
      <span className="font-mono text-[11px] text-text-primary truncate">{value}</span>
    </div>
  )
}

const flights = [
  { airline: 'EK 003', dep: '07:45', arr: '12:15', dur: '7h 30m', stops: 'Nonstop', price: 'AED 2,840' },
  { airline: 'BA 106', dep: '14:20', arr: '18:55', dur: '7h 35m', stops: 'Nonstop', price: 'AED 3,120' },
  { airline: 'QR 1006', dep: '02:10', arr: '09:45', dur: '10h 35m', stops: '1 stop · DOH', price: 'AED 2,460' },
]

export function FlightBookingSearch() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-text-muted">// 3 results</span>
          <span className="font-display font-bold text-text-primary text-sm">
            DXB → LHR · Mon, Oct 14
          </span>
        </div>
        <span className="font-mono text-[10px] text-accent-cyan">Sort: Cheapest</span>
      </div>

      <div className="grid grid-cols-[80px_1fr] gap-3 flex-1 min-h-0">
        <aside className="rounded-md bg-white/[0.03] backdrop-blur-md border border-border-default p-2 flex flex-col gap-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
            // filters
          </span>
          {['Stops', 'Airlines', 'Times', 'Price'].map((f) => (
            <span key={f} className="font-mono text-[10px] text-text-secondary">
              {f}
            </span>
          ))}
        </aside>

        <ul className="flex flex-col gap-2 overflow-hidden">
          {flights.map((f, i) => (
            <li
              key={f.airline}
              className={`rounded-md backdrop-blur-md border p-2.5 flex items-center justify-between gap-3 ${
                i === 0
                  ? 'bg-accent-cyan/[0.06] border-accent-cyan/40'
                  : 'bg-white/[0.03] border-border-default'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-7 h-7 rounded bg-bg-secondary border border-border-default flex items-center justify-center shrink-0">
                  <Plane size={12} className="text-accent-cyan" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] text-text-primary font-bold">
                    {f.dep} → {f.arr}
                  </span>
                  <span className="font-mono text-[9px] text-text-muted truncate">
                    {f.airline} · {f.dur} · {f.stops}
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-accent-cyan text-xs shrink-0">
                {f.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const legs = [
  { code: 'EK 003', from: 'DXB', to: 'LHR', dep: '07:45', arr: '12:15', dur: '7h 30m', date: 'Mon, Oct 14' },
  { code: 'EK 002', from: 'LHR', to: 'DXB', dep: '14:30', arr: '00:45+1', dur: '7h 15m', date: 'Sun, Oct 20' },
]

export function FlightBookingItinerary() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-text-muted">// review your trip</span>
          <span className="font-display font-bold text-text-primary text-sm">
            Itinerary · EK 003
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent-green">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          confirmed seat
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-3 flex-1 min-h-0">
        <div className="rounded-md bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-2.5">
          {legs.map((l, i) => (
            <div key={l.code} className={`flex flex-col gap-1 ${i > 0 ? 'pt-2 border-t border-border-default' : ''}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                  {l.date}
                </span>
                <span className="font-mono text-[10px] text-accent-cyan">{l.code}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-display font-bold text-text-primary text-base leading-none">
                    {l.dep}
                  </span>
                  <span className="font-mono text-[10px] text-text-muted">{l.from}</span>
                </div>
                <div className="flex flex-col items-center px-2">
                  <span className="font-mono text-[9px] text-text-muted">{l.dur}</span>
                  <div className="w-full h-px bg-border-default my-0.5 relative">
                    <Plane size={10} className="text-accent-cyan absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-primary px-0.5" />
                  </div>
                  <span className="font-mono text-[9px] text-text-muted">nonstop</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-display font-bold text-text-primary text-base leading-none">
                    {l.arr}
                  </span>
                  <span className="font-mono text-[10px] text-text-muted">{l.to}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-md bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
            // passenger
          </span>
          <Field label="Full name" value="Mohammed Sahl V U" />
          <Field label="Passport" value="P • • • • • 4821" />
          <button
            type="button"
            disabled
            className="mt-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-cyan text-bg-primary font-mono text-[10px] font-bold"
          >
            Continue <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </div>
  )
}

const totals = [
  { label: 'Base fare', value: 'AED 2,460' },
  { label: 'Taxes & fees', value: 'AED 320' },
  { label: 'Insurance', value: 'AED 60' },
]

export function FlightBookingCheckout() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-text-muted">// secure payment</span>
          <span className="font-display font-bold text-text-primary text-sm">Checkout</span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
          <Shield size={10} className="text-accent-green" /> SSL · 3-D Secure
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-3 flex-1 min-h-0">
        <div className="rounded-md bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-1.5">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-1">
            // order summary
          </span>
          {totals.map((t) => (
            <div key={t.label} className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-text-secondary">{t.label}</span>
              <span className="font-mono text-[11px] text-text-primary">{t.value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2 mt-1 border-t border-border-default">
            <span className="font-mono text-[11px] text-text-primary font-bold">Total</span>
            <span className="font-display font-bold text-accent-cyan text-base">AED 2,840</span>
          </div>
        </div>

        <div className="rounded-md bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
              // card details
            </span>
            <CreditCard size={12} className="text-accent-cyan" />
          </div>
          <Field label="Card number" value="4242 4242 4242 4242" />
          <div className="grid grid-cols-2 gap-2">
            <Field label="Expiry" value="08 / 27" />
            <Field label="CVV" value="• • •" />
          </div>
          <button
            type="button"
            disabled
            className="mt-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-cyan text-bg-primary font-mono text-[10px] font-bold"
          >
            Pay AED 2,840 <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </div>
  )
}

export function FlightBookingLogin() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center gap-1.5">
        <Plane size={14} className="text-accent-cyan" />
        <span className="font-display font-bold text-text-primary text-xs">Sahl Air</span>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[260px] rounded-xl bg-white/[0.03] backdrop-blur-xl border border-border-default p-4 flex flex-col gap-3 shadow-lg shadow-black/30">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
              // welcome back
            </span>
            <h3 className="font-display font-bold text-text-primary text-sm">Sign in to continue</h3>
          </div>

          <LoginField icon={Mail} label="Email" value="sahl@ecogo.com" />
          <LoginField icon={Lock} label="Password" value="••••••••••" />

          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-cyan text-bg-primary font-mono text-[10px] font-bold"
          >
            Sign in <ArrowRight size={10} />
          </button>

          <div className="flex items-center gap-2">
            <span className="flex-1 h-px bg-border-default" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
              or continue with
            </span>
            <span className="flex-1 h-px bg-border-default" />
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            <SocialButton icon={Github} label="Github" />
            <SocialButton icon={Apple} label="Apple" />
            <SocialButton icon={Facebook} label="Facebook" />
          </div>

          <span className="font-mono text-[10px] text-text-muted text-center">
            new here?{' '}
            <span className="text-accent-cyan">create account</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function LoginField({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">{label}</span>
      <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-bg-secondary/60 border border-border-default">
        <Icon size={11} className="text-accent-cyan shrink-0" />
        <span className="font-mono text-[11px] text-text-primary truncate">{value}</span>
      </div>
    </div>
  )
}

function SocialButton({ icon: Icon, label }: { icon: typeof Github; label: string }) {
  return (
    <button
      type="button"
      disabled
      aria-label={`Continue with ${label}`}
      className="inline-flex items-center justify-center px-2 py-1.5 rounded-md bg-bg-secondary/60 border border-border-default hover:border-accent-cyan/40 transition-colors"
    >
      <Icon size={12} className="text-text-secondary" />
    </button>
  )
}

export function FlightBookingSuccess() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-text-muted">// booking complete</span>
          <span className="font-display font-bold text-text-primary text-sm">Confirmation</span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent-green">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          paid · AED 2,840
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-3 flex-1 min-h-0">
        <div className="rounded-xl bg-white/[0.03] backdrop-blur-xl border border-border-default p-3 flex flex-col items-center justify-center gap-2 text-center relative overflow-hidden">
          <span
            aria-hidden
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent-green/15 blur-3xl"
          />
          <div className="relative w-12 h-12 rounded-full bg-accent-green/15 border border-accent-green/40 flex items-center justify-center">
            <CircleCheck size={22} className="text-accent-green" />
          </div>
          <h3 className="font-display font-bold text-text-primary text-base relative">
            Booking confirmed!
          </h3>
          <p className="font-mono text-[10px] text-text-muted relative">
            Your e-ticket has been sent to your email.
          </p>
          <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-bg-secondary/70 border border-border-default font-mono text-[10px] relative">
            <span className="text-text-muted">REF</span>
            <span className="text-accent-cyan font-bold tracking-widest">ECG-XK48F</span>
          </div>
        </div>

        <div className="rounded-xl bg-white/[0.03] backdrop-blur-xl border border-border-default p-3 flex flex-col gap-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
            // your trip
          </span>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col">
              <span className="font-display font-bold text-text-primary text-sm leading-none">DXB</span>
              <span className="font-mono text-[9px] text-text-muted">07:45</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <Plane size={10} className="text-accent-cyan" />
              <span className="font-mono text-[9px] text-text-muted">EK 003</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-display font-bold text-text-primary text-sm leading-none">LHR</span>
              <span className="font-mono text-[9px] text-text-muted">12:15</span>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1 border-t border-border-default">
            <div className="w-10 h-10 rounded bg-bg-secondary border border-border-default flex items-center justify-center shrink-0">
              <QrCode size={20} className="text-text-primary" />
            </div>
            <div className="flex flex-col text-left flex-1 min-w-0">
              <span className="font-mono text-[9px] text-text-muted inline-flex items-center gap-1">
                <Calendar size={9} /> Mon, Oct 14
              </span>
              <span className="font-mono text-[10px] text-text-secondary truncate">
                Seat 14A · Economy
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 mt-auto">
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-md bg-accent-cyan text-bg-primary font-mono text-[10px] font-bold"
            >
              <Download size={10} /> Ticket
            </button>
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-md bg-bg-secondary/60 border border-border-default text-text-secondary font-mono text-[10px]"
            >
              <Share2 size={10} /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const registry: Record<string, () => ReactNode> = {
  home: FlightBookingHome,
  login: FlightBookingLogin,
  list: FlightBookingSearch,
  booking: FlightBookingItinerary,
  success: FlightBookingSuccess,
}

export function FlightBookingView({ viewId }: { viewId: string }) {
  const View = registry[viewId]
  return View ? <View /> : null
}
