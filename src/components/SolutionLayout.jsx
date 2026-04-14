import { Outlet } from 'react-router-dom'
import '../pages/solution/solutionCommon.css'

/**
 * 솔루션 하위 페이지 공통 레이아웃.
 * solutionCommon.css를 여기서 한 번만 로드해 중복 제거.
 */
export default function SolutionLayout() {
  return <Outlet />
}
