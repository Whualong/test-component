/**
 * 使用格式 <svg-icon name="xxx"></svg-icon>
 */
import SvgIcon from '@/components/SvgIcon';

 const requireAll = requireContext => requireContext.keys().map(requireContext)
 const req = require.context('@/assets/icons', false, /\.svg$/)
 requireAll(req)
 export default SvgIcon