export function format(value: number | string) {
  if(typeof value === 'number') {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  } else {
    return new Intl.DateTimeFormat('pt-BR').format(
      new Date(value)
    )
  }
}