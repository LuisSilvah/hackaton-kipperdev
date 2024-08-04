// src/app/api/weather/route.ts

import { NextResponse } from 'next/server';

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API;

export async function GET(request: Request) {
  // Extraia os parâmetros da query
  const url = new URL(request.url);
  const lat = url.searchParams.get('lat');
  const lon = url.searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json({ error: 'Latitude and longitude are required' }, { status: 400 });
  }

  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;

  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
}
