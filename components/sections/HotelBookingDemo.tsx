import type { ReactNode } from 'react'
import {
  ArrowRight,
  Bed,
  Calendar,
  CircleCheck,
  Filter,
  Heart,
  KeyRound,
  MapPin,
  Search,
  Star,
  Users,
  Wifi,
} from 'lucide-react'

export function HotelBookingHome() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Bed size={14} className="text-accent-cyan" />
          <span className="font-display font-bold text-text-primary text-xs">Sahl Stays</span>
        </div>
        <nav className="flex items-center gap-3 font-mono text-[10px] text-text-muted">
          <span className="text-accent-cyan">Hotels</span>
          <span>Apartments</span>
          <span>Villas</span>
        </nav>
      </div>

      <div className="mt-1">
        <h3 className="font-display font-bold text-text-primary text-base sm:text-lg leading-tight">
          Find your stay
        </h3>
        <p className="font-mono text-[10px] text-text-muted">
          Curated stays in 120+ cities worldwide
        </p>
      </div>

      <div className="rounded-lg bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-2.5 shadow-lg shadow-black/20">
        <div className="grid grid-cols-2 gap-2">
          <HotelField label="Destination" value="Dubai, UAE" />
          <HotelField label="Guests" value="2 Adults · 1 Room" />
          <HotelField label="Check in" value="Mon · Oct 14" />
          <HotelField label="Check out" value="Sun · Oct 20" />
        </div>
        <button
          type="button"
          disabled
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-cyan text-bg-primary font-mono text-[10px] font-bold"
        >
          <Search size={10} /> Search stays
        </button>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap mt-auto">
        <span className="font-mono text-[10px] text-text-muted">// trending:</span>
        {['Dubai Marina', 'Downtown', 'Palm Jumeirah'].map((r) => (
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

function HotelField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 px-2 py-1.5 rounded-md bg-bg-secondary/60 border border-border-default">
      <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
        {label}
      </span>
      <span className="font-mono text-[11px] text-text-primary truncate">{value}</span>
    </div>
  )
}

const hotels = [
  { name: 'Aurora Marina Suites', area: 'Dubai Marina', rating: 4.8, reviews: 1284, price: 'AED 620', img: 'from-cyan-500/30 to-purple-500/20' },
  { name: 'The Palm Residences', area: 'Palm Jumeirah', rating: 4.9, reviews: 942, price: 'AED 890', img: 'from-purple-500/30 to-pink-500/20' },
  { name: 'Downtown Skyline Hotel', area: 'Downtown Dubai', rating: 4.6, reviews: 2105, price: 'AED 420', img: 'from-amber-500/30 to-rose-500/20' },
]

export function HotelBookingResults() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-text-muted">// 248 stays in Dubai</span>
          <span className="font-display font-bold text-text-primary text-sm">
            Mon, Oct 14 — Sun, Oct 20
          </span>
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-accent-cyan">
          <Filter size={10} /> Sort: Recommended
        </span>
      </div>

      <ul className="flex flex-col gap-2 flex-1 min-h-0 overflow-hidden">
        {hotels.map((h, i) => (
          <li
            key={h.name}
            className={`rounded-md backdrop-blur-md border p-2 flex items-center gap-2.5 ${
              i === 0
                ? 'bg-accent-cyan/[0.06] border-accent-cyan/40'
                : 'bg-white/[0.03] border-border-default'
            }`}
          >
            <div
              aria-hidden
              className={`w-12 h-12 rounded bg-gradient-to-br ${h.img} border border-border-default shrink-0 flex items-center justify-center`}
            >
              <Bed size={16} className="text-text-primary/70" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-mono text-[11px] text-text-primary font-bold truncate">
                {h.name}
              </span>
              <span className="font-mono text-[9px] text-text-muted inline-flex items-center gap-1 truncate">
                <MapPin size={9} /> {h.area}
              </span>
              <span className="font-mono text-[9px] text-text-secondary inline-flex items-center gap-1">
                <Star size={9} className="text-accent-cyan" /> {h.rating} · {h.reviews} reviews
              </span>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <span className="font-display font-bold text-accent-cyan text-xs">{h.price}</span>
              <span className="font-mono text-[9px] text-text-muted">/ night</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const amenities = [
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Bed, label: 'King bed' },
  { icon: Users, label: 'Sleeps 2' },
]

export function HotelBookingRoom() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-text-muted">// room detail</span>
          <span className="font-display font-bold text-text-primary text-sm">
            Aurora Marina Suites
          </span>
          <span className="font-mono text-[9px] text-text-muted inline-flex items-center gap-1">
            <MapPin size={9} /> Dubai Marina · <Star size={9} className="text-accent-cyan" /> 4.8
          </span>
        </div>
        <button
          type="button"
          disabled
          aria-label="Save to favorites"
          className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-bg-secondary/60 border border-border-default"
        >
          <Heart size={12} className="text-accent-cyan" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-3 flex-1 min-h-0">
        <div className="rounded-md bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-2">
          <div
            aria-hidden
            className="h-16 rounded bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-pink-500/15 border border-border-default flex items-center justify-center"
          >
            <Bed size={22} className="text-text-primary/70" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
            // deluxe sea view · 38m²
          </span>
          <div className="grid grid-cols-3 gap-1.5">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-center gap-1 px-1 py-1.5 rounded bg-bg-secondary/60 border border-border-default"
              >
                <a.icon size={12} className="text-accent-cyan" />
                <span className="font-mono text-[9px] text-text-secondary text-center leading-tight">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-1.5">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
            // 6 nights total
          </span>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-text-secondary">AED 620 × 6</span>
            <span className="font-mono text-[11px] text-text-primary">AED 3,720</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-text-secondary">Taxes</span>
            <span className="font-mono text-[11px] text-text-primary">AED 280</span>
          </div>
          <div className="flex items-center justify-between pt-2 mt-1 border-t border-border-default">
            <span className="font-mono text-[11px] text-text-primary font-bold">Total</span>
            <span className="font-display font-bold text-accent-cyan text-base">AED 4,000</span>
          </div>
          <button
            type="button"
            disabled
            className="mt-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-cyan text-bg-primary font-mono text-[10px] font-bold"
          >
            Reserve <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </div>
  )
}

export function HotelBookingGuest() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-text-muted">// guest details</span>
          <span className="font-display font-bold text-text-primary text-sm">Confirm booking</span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent-green">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          held for 10:00
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-3 flex-1 min-h-0">
        <div className="rounded-md bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
            // primary guest
          </span>
          <HotelField label="Full name" value="Mohammed Sahl V U" />
          <HotelField label="Email" value="sahl@mhdsahl.dev" />
          <HotelField label="Phone" value="+971 5• ••• 4821" />
        </div>
        <div className="rounded-md bg-white/[0.03] backdrop-blur-md border border-border-default p-3 flex flex-col gap-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
            // your stay
          </span>
          <div className="flex items-center justify-between font-mono text-[11px]">
            <span className="text-text-secondary inline-flex items-center gap-1">
              <Calendar size={10} /> Check in
            </span>
            <span className="text-text-primary">Mon, Oct 14</span>
          </div>
          <div className="flex items-center justify-between font-mono text-[11px]">
            <span className="text-text-secondary inline-flex items-center gap-1">
              <Calendar size={10} /> Check out
            </span>
            <span className="text-text-primary">Sun, Oct 20</span>
          </div>
          <div className="flex items-center justify-between font-mono text-[11px]">
            <span className="text-text-secondary inline-flex items-center gap-1">
              <Users size={10} /> Guests
            </span>
            <span className="text-text-primary">2 · 1 Room</span>
          </div>
          <button
            type="button"
            disabled
            className="mt-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-cyan text-bg-primary font-mono text-[10px] font-bold"
          >
            Confirm & Pay AED 4,000
          </button>
        </div>
      </div>
    </div>
  )
}

export function HotelBookingSuccess() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-text-muted">// reservation confirmed</span>
          <span className="font-display font-bold text-text-primary text-sm">Booking #SS-91204</span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent-green">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          paid · AED 4,000
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] gap-3 flex-1 min-h-0">
        <div className="rounded-xl bg-white/[0.03] backdrop-blur-xl border border-border-default p-3 flex flex-col items-center justify-center gap-2 text-center relative overflow-hidden">
          <span
            aria-hidden
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent-green/15 blur-3xl"
          />
          <div className="relative w-12 h-12 rounded-full bg-accent-green/15 border border-accent-green/40 flex items-center justify-center">
            <CircleCheck size={22} className="text-accent-green" />
          </div>
          <h3 className="font-display font-bold text-text-primary text-base relative">
            You&apos;re all set
          </h3>
          <p className="font-mono text-[10px] text-text-muted relative">
            Confirmation emailed to sahl@mhdsahl.dev
          </p>
        </div>

        <div className="rounded-xl bg-white/[0.03] backdrop-blur-xl border border-border-default p-3 flex flex-col gap-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
            // your stay
          </span>
          <div className="flex items-center gap-2">
            <div
              aria-hidden
              className="w-10 h-10 rounded bg-gradient-to-br from-cyan-500/30 to-purple-500/20 border border-border-default flex items-center justify-center shrink-0"
            >
              <Bed size={16} className="text-text-primary/70" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[11px] text-text-primary font-bold truncate">
                Aurora Marina Suites
              </span>
              <span className="font-mono text-[9px] text-text-muted">Deluxe Sea View · King</span>
            </div>
          </div>
          <div className="flex items-center justify-between font-mono text-[10px] text-text-secondary">
            <span className="inline-flex items-center gap-1">
              <Calendar size={9} /> Oct 14 → Oct 20
            </span>
            <span className="inline-flex items-center gap-1">
              <Users size={9} /> 2 guests
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-auto">
            <button
              type="button"
              disabled
              className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-md bg-accent-cyan text-bg-primary font-mono text-[10px] font-bold"
            >
              <KeyRound size={10} /> View key
            </button>
            <button
              type="button"
              disabled
              className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-md bg-bg-secondary/60 border border-border-default text-text-secondary font-mono text-[10px]"
            >
              Add to wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const registry: Record<string, () => ReactNode> = {
  home: HotelBookingHome,
  results: HotelBookingResults,
  room: HotelBookingRoom,
  guest: HotelBookingGuest,
  success: HotelBookingSuccess,
}

export function HotelBookingViewRouter({ viewId }: { viewId: string }) {
  const View = registry[viewId]
  return View ? <View /> : null
}

