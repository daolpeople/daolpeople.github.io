// 배포(GitHub Pages 등)에서도 이미지가 나오도록 항상 절대 경로 반환
export const asset = (path) => {
  if (typeof path !== 'string') return path
  if (path.startsWith('http')) return path
  return path.startsWith('/') ? path : `/${path}`
}

