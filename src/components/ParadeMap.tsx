import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { guilds } from '../guilds'
import { GuildShield } from './GuildShield'
import { MAP_STYLE } from './mapStyle'

// Pestalozzianlage, Bahnhofstrasse, Bürkliplatz, Fraumünsterstrasse, Poststrasse,
// Bahnhofstrasse, Uraniastrasse, Rudolf-Brun-Brücke, Limmatquai, Bellevue.
const ROUTE: [number, number][] = [
  [47.375554, 8.538722],
  [47.375554, 8.539169],
  [47.375250, 8.539015],
  [47.375150, 8.538961],
  [47.374638, 8.538684],
  [47.374617, 8.538673],
  [47.374587, 8.538659],
  [47.374537, 8.538632],
  [47.374257, 8.538477],
  [47.374012, 8.538344],
  [47.373956, 8.538318],
  [47.373900, 8.538293],
  [47.373869, 8.538282],
  [47.373843, 8.538276],
  [47.373818, 8.538269],
  [47.373794, 8.538265],
  [47.373767, 8.538261],
  [47.373732, 8.538259],
  [47.373697, 8.538257],
  [47.373663, 8.538257],
  [47.373353, 8.538268],
  [47.373312, 8.538270],
  [47.372955, 8.538284],
  [47.372712, 8.538292],
  [47.372471, 8.538305],
  [47.372439, 8.538307],
  [47.372409, 8.538310],
  [47.372377, 8.538314],
  [47.372351, 8.538319],
  [47.372325, 8.538324],
  [47.372285, 8.538334],
  [47.372244, 8.538347],
  [47.372211, 8.538357],
  [47.372175, 8.538370],
  [47.371744, 8.538531],
  [47.371584, 8.538590],
  [47.371120, 8.538764],
  [47.371070, 8.538784],
  [47.371042, 8.538794],
  [47.370733, 8.538911],
  [47.370330, 8.539064],
  [47.370217, 8.539159],
  [47.370181, 8.539188],
  [47.370155, 8.539209],
  [47.370130, 8.539225],
  [47.370109, 8.539238],
  [47.370088, 8.539249],
  [47.370073, 8.539256],
  [47.370058, 8.539263],
  [47.370014, 8.539278],
  [47.369946, 8.539301],
  [47.369894, 8.539317],
  [47.369695, 8.539373],
  [47.369667, 8.539381],
  [47.369610, 8.539395],
  [47.369550, 8.539406],
  [47.369482, 8.539414],
  [47.369337, 8.539440],
  [47.369234, 8.539469],
  [47.369179, 8.539485],
  [47.368825, 8.539612],
  [47.368604, 8.539695],
  [47.368372, 8.539783],
  [47.368016, 8.539918],
  [47.367905, 8.539960],
  [47.367811, 8.539999],
  [47.367501, 8.540118],
  [47.367216, 8.540224],
  [47.367188, 8.540235],
  [47.366887, 8.540347],
  [47.366644, 8.540443],
  [47.366621, 8.540453],
  [47.366572, 8.540476],
  [47.366490, 8.540523],
  [47.366652, 8.541534],
  [47.366719, 8.541523],
  [47.366758, 8.541517],
  [47.367163, 8.541395],
  [47.367335, 8.541346],
  [47.367686, 8.541239],
  [47.368006, 8.541146],
  [47.368065, 8.541127],
  [47.368149, 8.541101],
  [47.368949, 8.540858],
  [47.368995, 8.540844],
  [47.369049, 8.540828],
  [47.369264, 8.540763],
  [47.369346, 8.540738],
  [47.369589, 8.540665],
  [47.369713, 8.540628],
  [47.369723, 8.540624],
  [47.369731, 8.540619],
  [47.369738, 8.540611],
  [47.369750, 8.540591],
  [47.369757, 8.540570],
  [47.369759, 8.540544],
  [47.369758, 8.540519],
  [47.369624, 8.539500],
  [47.369618, 8.539460],
  [47.369610, 8.539395],
  [47.369667, 8.539381],
  [47.369695, 8.539373],
  [47.369894, 8.539317],
  [47.369946, 8.539301],
  [47.370014, 8.539278],
  [47.370055, 8.539264],
  [47.370073, 8.539256],
  [47.370088, 8.539249],
  [47.370109, 8.539238],
  [47.370130, 8.539225],
  [47.370155, 8.539209],
  [47.370181, 8.539188],
  [47.370217, 8.539159],
  [47.370330, 8.539064],
  [47.370733, 8.538911],
  [47.371042, 8.538794],
  [47.371070, 8.538784],
  [47.371120, 8.538764],
  [47.371584, 8.538590],
  [47.371744, 8.538531],
  [47.372175, 8.538370],
  [47.372211, 8.538357],
  [47.372244, 8.538347],
  [47.372285, 8.538334],
  [47.372325, 8.538324],
  [47.372351, 8.538319],
  [47.372377, 8.538314],
  [47.372409, 8.538310],
  [47.372439, 8.538307],
  [47.372471, 8.538305],
  [47.372712, 8.538292],
  [47.372955, 8.538284],
  [47.373312, 8.538270],
  [47.373353, 8.538268],
  [47.373663, 8.538257],
  [47.373697, 8.538257],
  [47.373732, 8.538259],
  [47.373767, 8.538261],
  [47.373794, 8.538265],
  [47.373818, 8.538269],
  [47.373843, 8.538276],
  [47.373869, 8.538282],
  [47.373900, 8.538293],
  [47.373904, 8.538309],
  [47.373911, 8.538331],
  [47.373917, 8.538348],
  [47.373929, 8.538369],
  [47.373968, 8.538405],
  [47.374295, 8.538585],
  [47.374363, 8.538624],
  [47.374413, 8.538665],
  [47.374446, 8.538704],
  [47.374463, 8.538732],
  [47.374474, 8.538755],
  [47.374483, 8.538779],
  [47.374495, 8.538812],
  [47.374524, 8.539195],
  [47.374507, 8.539556],
  [47.374502, 8.539658],
  [47.374488, 8.539936],
  [47.374482, 8.540095],
  [47.374468, 8.540464],
  [47.374462, 8.540637],
  [47.374439, 8.541355],
  [47.374432, 8.541542],
  [47.374430, 8.541597],
  [47.374429, 8.541692],
  [47.374421, 8.541884],
  [47.374416, 8.541978],
  [47.374375, 8.542807],
  [47.374373, 8.542835],
  [47.374372, 8.542849],
  [47.374372, 8.542867],
  [47.374365, 8.543016],
  [47.374272, 8.542990],
  [47.374235, 8.542977],
  [47.374104, 8.542938],
  [47.373907, 8.542887],
  [47.373782, 8.542858],
  [47.373576, 8.542816],
  [47.373424, 8.542795],
  [47.373158, 8.542775],
  [47.372920, 8.542770],
  [47.372805, 8.542770],
  [47.372620, 8.542772],
  [47.372479, 8.542773],
  [47.372232, 8.542793],
  [47.372118, 8.542803],
  [47.371883, 8.542825],
  [47.371802, 8.542832],
  [47.371756, 8.542836],
  [47.371484, 8.542874],
  [47.371180, 8.542931],
  [47.370965, 8.542976],
  [47.370735, 8.543024],
  [47.370557, 8.543078],
  [47.370385, 8.543153],
  [47.370307, 8.543196],
  [47.370070, 8.543335],
  [47.369998, 8.543370],
  [47.369938, 8.543397],
  [47.369873, 8.543422],
  [47.369821, 8.543443],
  [47.369765, 8.543464],
  [47.369650, 8.543498],
  [47.369554, 8.543512],
  [47.369473, 8.543516],
  [47.369368, 8.543510],
  [47.369305, 8.543503],
  [47.369257, 8.543498],
  [47.369210, 8.543496],
  [47.369128, 8.543507],
  [47.369062, 8.543532],
  [47.368973, 8.543582],
  [47.368912, 8.543629],
  [47.368779, 8.543774],
  [47.368641, 8.543936],
  [47.368496, 8.544083],
  [47.368013, 8.544614],
  [47.367783, 8.544864],
  [47.367703, 8.544944],
  [47.367631, 8.545003],
  [47.367553, 8.545053],
  [47.367468, 8.545099],
  [47.367380, 8.545153],
  [47.366908, 8.545202],
]

export function ParadeMap() {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = host.current
    if (!node) return

    const map = new maplibregl.Map({
      container: node,
      style: MAP_STYLE,
      center: [8.542, 47.37],
      zoom: 13,
      scrollZoom: false,
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
      attributionControl: false,
      maplibreLogo: false,
    })
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')

    const roots: ReturnType<typeof createRoot>[] = []
    let openPin: HTMLButtonElement | null = null

    map.on('load', () => {
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: ROUTE.map(([lat, lng]) => [lng, lat]),
          },
        },
      })
      map.addLayer({
        id: 'route-casing',
        type: 'line',
        source: 'route',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#fffaf3', 'line-width': 8 },
      })
      map.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#1a56c4', 'line-width': 4 },
      })
      if (!map.hasImage('parade-arrow')) {
        const size = 32
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const context = canvas.getContext('2d')
        if (context) {
          context.fillStyle = '#1a56c4'
          context.beginPath()
          context.moveTo(4, 5)
          context.lineTo(28, 16)
          context.lineTo(4, 27)
          context.closePath()
          context.fill()
          map.addImage('parade-arrow', context.getImageData(0, 0, size, size), { pixelRatio: 2 })
        }
      }
      map.addLayer({
        id: 'route-arrows',
        type: 'symbol',
        source: 'route',
        layout: {
          'symbol-placement': 'line',
          'symbol-spacing': 90,
          'icon-image': 'parade-arrow',
          'icon-size': 0.65,
          'icon-rotation-alignment': 'map',
          'icon-keep-upright': false,
          'icon-allow-overlap': true,
          'icon-ignore-placement': true,
        },
      })

      const start = document.createElement('div')
      start.className = 'parade-start'
      start.textContent = 'Start'
      new maplibregl.Marker({ element: start, anchor: 'bottom' })
        .setLngLat([ROUTE[0][1], ROUTE[0][0]])
        .addTo(map)

      const goal = document.createElement('img')
      goal.className = 'parade-booegg'
      goal.src = '/booegg.png'
      goal.alt = 'Böögg auf dem Bellevueplatz'
      const goalPoint = ROUTE[ROUTE.length - 1]
      new maplibregl.Marker({ element: goal, anchor: 'bottom' })
        .setLngLat([goalPoint[1], goalPoint[0]])
        .addTo(map)

      const bounds = new maplibregl.LngLatBounds()
      for (const [lat, lng] of ROUTE) bounds.extend([lng, lat])
      map.fitBounds(bounds, { padding: { top: 48, bottom: 28, left: 28, right: 28 }, maxZoom: 15, duration: 0 })

      for (const guild of guilds) {
        const container = document.createElement('div')
        const root = createRoot(container)
        root.render(
          <div className="parade-pop">
            <GuildShield id={guild.id} name={guild.name} />
            <div>
              <strong>{guild.name}</strong>
              <span>{guild.address}</span>
            </div>
          </div>,
        )
        roots.push(root)

        const popup = new maplibregl.Popup({
          closeButton: false,
          className: 'parade-popup',
          maxWidth: '230px',
          offset: 12,
          focusAfterOpen: false,
        }).setDOMContent(container)

        const pin = document.createElement('button')
        pin.type = 'button'
        pin.className = 'map-pin'
        pin.setAttribute('aria-label', guild.name)
        pin.addEventListener('click', (event) => {
          event.stopPropagation()
          if (openPin && openPin !== pin) openPin.classList.remove('is-open')
          openPin = pin
          pin.classList.add('is-open')
          popup.setLngLat([guild.lng, guild.lat]).addTo(map)
        })
        popup.on('close', () => {
          pin.classList.remove('is-open')
          if (openPin === pin) openPin = null
        })
        new maplibregl.Marker({ element: pin }).setLngLat([guild.lng, guild.lat]).addTo(map)
      }
    })

    return () => {
      map.remove()
      for (const root of roots) root.unmount()
    }
  }, [])

  return (
    <figure className="parade-map">
      <div ref={host} className="parade-map__canvas" />
      <div className="parade-map__legend">
        <span><i className="parade-map__dot parade-map__dot--guild" /> Zünfte</span>
        <span><i className="parade-map__dot parade-map__dot--route" /> Umzugsroute</span>
        <span className="parade-map__credit">© OpenFreeMap © OpenStreetMap</span>
      </div>
    </figure>
  )
}
