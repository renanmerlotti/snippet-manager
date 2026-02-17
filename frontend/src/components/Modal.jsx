import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Modal({ isOpen, onClose, title, children}) {
  return (
    <AnimatePresence>
        {isOpen && (
            <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
                <motion.div
                    initial= {{ opacity: 0 }}
                    animate= {{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className='absolute inset-0 bg-black/60 backdrop-blur-sm'
                />

                <motion.div
                    initial= {{ scale: 0.95, opacity: 0 }}
                    animate= {{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='relative bg-main-background border border-title-color/20 rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col'
                >
                    <div className='flex items-center justify-between px-6 py-4 border-b border-title-color/10 bg-card-login'>
                        <h3 className='font-bold text-title-color text-sm tracking-widest uppercase'>{title}</h3>
                        <button
                            onClick={onClose}
                            className='text-common-text/50 hover:text-title-color transition-colors'
                        >
                            ✕
                        </button>
                    </div>

                    <div className='bg-main-background'>
                        {children}
                    </div>
                </motion.div> 
            </div>
        )}
    </AnimatePresence>
  )
}

export default Modal