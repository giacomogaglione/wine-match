import { cn } from "@/lib/utils"
import { XMarkIcon } from "@heroicons/react/24/outline"
import * as ToastPrimitive from "@radix-ui/react-toast"

type IToast = {
  title?: string
  description?: string
}

const Toast = (toast: IToast) => {
  return (
    <ToastPrimitive.Provider swipeDirection={"right"}>
      <ToastPrimitive.Root
        className={cn(
          "fixed inset-x-2 bottom-8 z-50 w-full max-w-sm rounded-lg shadow-lg md:inset-x-4 md:right-8 lg:inset-x-4 lg:right-8 lg:left-auto",
          "bg-white dark:bg-slate-800",
          "radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
          "radix-state-closed:animate-toast-hide",
          "radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x",
          "radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x",
          "radix-swipe-direction-down:radix-swipe-end:animate-toast-swipe-out-y",
          "radix-swipe-direction-down:translate-y-radix-toast-swipe-move-y",
          "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        )}
      >
        <div className="flex py-2 pl-5">
          <div className="radix w-full">
            <ToastPrimitive.Title className="text-lg font-medium text-slate-800 dark:text-slate-100">
              {toast.title}
            </ToastPrimitive.Title>
            <ToastPrimitive.Description className="mt-1 text-sm font-normal text-slate-600 dark:text-slate-400">
              {toast.description}
            </ToastPrimitive.Description>
          </div>
          <ToastPrimitive.Close className="absolute top-2 right-2 rounded-md p-1 text-slate-600 hover:text-slate-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-400 dark:hover:text-slate-50">
            <XMarkIcon className="h-4 w-4" />
          </ToastPrimitive.Close>
        </div>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  )
}

export default Toast
