export function minutes(time) {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) throw new Error('Informe um horário válido.');
  const [h,m] = time.split(':').map(Number); return h*60+m;
}
export function duration(entry) {
  const start=minutes(entry.start), end=minutes(entry.end);
  if(end<=start) throw new Error('A saída deve ser depois da entrada, no mesmo dia.');
  let pause=0;
  if(entry.pauseStart || entry.pauseEnd) {
    const a=minutes(entry.pauseStart), b=minutes(entry.pauseEnd);
    if(a<start || b<=a || b>end) throw new Error('O intervalo deve ficar entre a entrada e a saída.');
    pause=b-a;
  }
  return end-start-pause;
}
export function format(value) { const n=Math.abs(value); return `${value<0?'−':''}${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`; }
export function csv(rows) {
  const cell=value=>'"'+String(value).replaceAll('"','""')+'"';
  return '\uFEFF'+[['Data','Entrada','Início intervalo','Fim intervalo','Saída','Horas','Saldo (meta 8h)'],...rows.map(e=>[e.date,e.start,e.pauseStart,e.pauseEnd,e.end,format(duration(e)),format(duration(e)-480)])].map(row=>row.map(cell).join(';')).join('\r\n');
}
