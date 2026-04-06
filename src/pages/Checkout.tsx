import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DURATIONS, EASINGS } from '../constants/animations';
import { Lock, ShieldCheck, Shield, Info } from 'lucide-react';
import { ALL_COURSES } from '../constants';

export default function Checkout() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = ALL_COURSES.find(c => c.id === courseId) || ALL_COURSES[0];
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Mock payment process
    setTimeout(() => {
      setIsProcessing(false);
      navigate(`/courses/${course.id}/learn`);
    }, 1500);
  };

  return (
    <div className="bg-[#fcf9f4] text-[#1c1c19] min-h-screen font-body flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATIONS.medium, ease: EASINGS.default }}
          className="mb-12"
        >
          <h1 className="font-headline text-4xl md:text-5xl font-black text-[#00113a] tracking-tight mb-2">Secure Checkout</h1>
          <p className="text-[#444650] text-lg">Complete your enrollment and join the next generation of African leaders.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-16 items-start">
          {/* Left Column: Payment Methods (60%) */}
          <div className="md:col-span-6 space-y-12">
            {/* Tabs */}
            <div className="space-y-8">
              <div className="flex gap-4 p-1 bg-[#f6f3ee] rounded-xl w-fit relative overflow-hidden">
                <button 
                  onClick={() => setPaymentMethod('mpesa')}
                  className={`relative px-8 py-3 rounded-xl font-bold transition-all z-10 ${paymentMethod === 'mpesa' ? 'text-white' : 'text-[#444650] hover:bg-[#f0ede9]'}`}
                >
                  M-Pesa
                </button>
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`relative px-8 py-3 rounded-xl font-bold transition-all z-10 ${paymentMethod === 'card' ? 'text-white' : 'text-[#444650] hover:bg-[#f0ede9]'}`}
                >
                  Card
                </button>
                <button 
                  onClick={() => setPaymentMethod('voucher')}
                  className={`relative px-8 py-3 rounded-xl font-bold transition-all z-10 ${paymentMethod === 'voucher' ? 'text-white' : 'text-[#444650] hover:bg-[#f0ede9]'}`}
                >
                  Voucher
                </button>
                
                {/* Sliding indicator */}
                <motion.div 
                  layoutId="checkoutMethodBackground"
                  className="absolute top-1 bottom-1 bg-[#00113a] rounded-lg shadow-sm"
                  initial={false}
                  animate={{
                    left: paymentMethod === 'mpesa' ? 4 : paymentMethod === 'card' ? 98 : 166,
                    width: paymentMethod === 'mpesa' ? 90 : paymentMethod === 'card' ? 64 : 96,
                  }}
                  transition={{ duration: DURATIONS.fast, ease: EASINGS.default }}
                />
              </div>

              <AnimatePresence mode="wait">
                {/* M-Pesa Content */}
                {paymentMethod === 'mpesa' && (
                  <motion.div 
                    key="mpesa"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: DURATIONS.medium, ease: EASINGS.default }}
                    className="bg-white p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-12px_rgba(28,28,25,0.06)] border-b-2 border-[#795900]"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                      <div className="space-y-1">
                        <h3 className="font-headline text-2xl font-bold text-[#00113a]">Mobile Money Payment</h3>
                        <p className="text-[#444650]">Pay instantly using your Safaricom line.</p>
                      </div>
                      <div className="h-12 w-auto">
                        <img alt="M-Pesa Logo" className="h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH0O3vySc8LKTWiuECOk9jm3FMHEBvdW--Z9I--0fiWhRVckX7O3FEf1L9JoBOQfFVk3-QT9DRTOAID0f-euU_Hj0d6R-xB-meXDr0qx7OxFfrrQRilY4B8Qbauqj8k1x3_5KUIt2oi1QlZ3kbjPMdUm1xVqEuMYQK4qWOmhe7bcId-JgkerP_auYPs0WwUZtDLOK4-JV7oYMa5qDD_d-jx6HsSLx-66Xw8psQtutbOGP7_KehsCGeHRXcHjS5y6GTo_c7YUe_KQ"/>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#00113a] tracking-wide uppercase font-label">Phone Number</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[#002366]">KE</span>
                          <input className="w-full pl-12 pr-4 py-4 bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 rounded-lg font-semibold text-lg transition-all outline-none" placeholder="7XX XXX XXX" type="text" defaultValue="+254" />
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 bg-[#ffdfa0]/20 rounded-xl">
                        <Info className="text-[#795900] w-6 h-6 flex-shrink-0" />
                        <p className="text-sm text-[#6d5000] leading-relaxed">
                          You will receive an <span className="font-bold">M-Pesa prompt</span> on your phone shortly after clicking "Confirm & Pay". Please enter your M-Pesa PIN to authorize the transaction.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Card Content Placeholder */}
                {paymentMethod === 'card' && (
                  <motion.div 
                    key="card"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: DURATIONS.medium, ease: EASINGS.default }}
                    className="bg-white p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-12px_rgba(28,28,25,0.06)] border-b-2 border-[#795900]"
                  >
                    <h3 className="font-headline text-2xl font-bold text-[#00113a] mb-4">Credit / Debit Card</h3>
                    <p className="text-[#444650]">Card payment integration coming soon.</p>
                  </motion.div>
                )}

                {/* Voucher Content Placeholder */}
                {paymentMethod === 'voucher' && (
                  <motion.div 
                    key="voucher"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: DURATIONS.medium, ease: EASINGS.default }}
                    className="bg-white p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-12px_rgba(28,28,25,0.06)] border-b-2 border-[#795900]"
                  >
                    <h3 className="font-headline text-2xl font-bold text-[#00113a] mb-4">Redeem Voucher</h3>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#00113a] tracking-wide uppercase font-label">Voucher Code</label>
                      <input className="w-full px-4 py-4 bg-[#f6f3ee] border-0 border-b-2 border-transparent focus:border-[#795900] focus:ring-0 rounded-lg font-semibold text-lg transition-all outline-none" placeholder="Enter code" type="text" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Order Summary (40%) */}
          <aside className="md:col-span-4 sticky top-32">
            <div className="bg-[#002366]/5 rounded-xl p-8 space-y-8">
              <h2 className="font-headline text-xl font-bold text-[#00113a]">Order Summary</h2>
              
              {/* Course Details Card */}
              <div className="flex gap-4 items-start">
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-[#f0ede9]">
                  <img alt={course.title} className="w-full h-full object-cover" src={course.image} referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black tracking-widest text-[#795900] uppercase">{course.category}</span>
                  <h4 className="font-headline text-md font-bold text-[#00113a] leading-tight">{course.title}</h4>
                  <p className="text-sm text-[#444650]">{course.instructor?.name || 'Instructor'}</p>
                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-[#00113a] font-bold text-lg">{course.price}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-[#444650] uppercase tracking-wider font-label">Promo Code</label>
                <div className="flex gap-2">
                  <input className="flex-grow bg-white border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#795900]/20 outline-none" placeholder="GRIOT2024" type="text" />
                  <button className="bg-[#002366] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#00113a] transition-colors">Apply</button>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-4 pt-4 border-t border-[#002366]/10">
                <div className="flex justify-between text-sm">
                  <span className="text-[#444650]">Subtotal</span>
                  <span className="text-[#00113a] font-medium">{course.price}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-[#002366]/20">
                  <span className="font-headline text-lg font-bold text-[#00113a]">Total</span>
                  <span className="font-headline text-2xl font-black text-[#00113a]">{course.price}</span>
                </div>
              </div>

              {/* Pay Button */}
              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full bg-[#ffbf00] py-5 rounded-xl text-[#6d5000] font-black text-lg tracking-tight transition-all shadow-lg shadow-[#ffbf00]/20 flex items-center justify-center gap-2 ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-105 active:scale-[0.98]'}`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#6d5000] border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  'Confirm & Pay'
                )}
              </button>
              
              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 text-[#6B7280]">
                <div className="flex items-center gap-1.5 flex-col text-center sm:flex-row sm:text-left">
                  <Lock size={20} className="shrink-0" />
                  <span className="text-xs font-semibold leading-tight">Secure<br className="hidden sm:block lg:hidden"/> payment</span>
                </div>
                <div className="flex items-center gap-1.5 flex-col text-center sm:flex-row sm:text-left">
                  <ShieldCheck size={20} className="shrink-0" />
                  <span className="text-xs font-semibold leading-tight">Data<br className="hidden sm:block lg:hidden"/> Protection</span>
                </div>
                <div className="flex items-center gap-1.5 flex-col text-center sm:flex-row sm:text-left">
                  <Shield size={20} className="shrink-0" />
                  <span className="text-xs font-semibold leading-tight">30-Day Money-Back<br className="hidden sm:block lg:hidden"/> Guarantee</span>
                </div>
              </div>

              <p className="text-[10px] text-center text-[#444650]/80 px-4">
                By completing this purchase, you agree to SkillsZone Africa's Terms of Service and Privacy Policy.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-6 text-center border-t border-[#c5c6d2]/20">
        <p className="text-sm text-[#6B7280]">
          © 2024 SkillZone Africa · Privacy Policy · Terms of Service
        </p>
      </footer>
    </div>
  );
}
