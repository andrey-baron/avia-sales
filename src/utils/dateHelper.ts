export function msToHoursAndMinutes(duration: number) {
  let minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return { hours, minutes };
}

// export
