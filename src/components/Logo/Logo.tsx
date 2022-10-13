import { SVGAttributes } from 'react';

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={105}
      height={120}
      viewBox="0 0 105 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2_24)" fill="#81D8F7">
        <path d="M104.968 60.01c0-6.976-8.708-13.587-22.06-17.687 3.082-13.653 1.713-24.514-4.321-27.992-1.39-.816-3.017-1.202-4.793-1.202v4.787c.984 0 1.776.193 2.44.558 2.91 1.674 4.172 8.05 3.187 16.25-.235 2.018-.62 4.143-1.09 6.31-4.194-1.03-8.773-1.824-13.587-2.339-2.889-3.971-5.884-7.578-8.9-10.733 6.974-6.504 13.521-10.067 17.972-10.067v-4.787c-5.884 0-13.587 4.207-21.375 11.505-7.788-7.255-15.49-11.42-21.374-11.42v4.787c4.429 0 10.997 3.542 17.972 10.003a101.323 101.323 0 00-8.836 10.712c-4.836.515-9.414 1.31-13.608 2.361a64.938 64.938 0 01-1.112-6.225c-1.006-8.2.235-14.575 3.123-16.271.642-.386 1.477-.558 2.46-.558v-4.787c-1.796 0-3.423.386-4.835 1.202-6.012 3.478-7.36 14.318-4.258 27.927C8.666 46.466 0 53.056 0 60.011c0 6.976 8.708 13.588 22.06 17.688-3.082 13.652-1.712 24.514 4.321 27.991 1.39.816 3.017 1.202 4.814 1.202 5.884 0 13.587-4.207 21.375-11.505 7.788 7.255 15.49 11.42 21.374 11.42 1.797 0 3.423-.387 4.835-1.203 6.013-3.477 7.36-14.317 4.258-27.927 13.266-4.1 21.931-10.711 21.931-17.666zM77.111 45.694c-.792 2.769-1.776 5.624-2.889 8.479a101.627 101.627 0 00-2.803-5.152 116.282 116.282 0 00-3.08-5.023c3.038.45 5.969 1.009 8.772 1.696zm-9.8 22.861c-1.669 2.898-3.38 5.646-5.156 8.2-3.188.28-6.419.43-9.671.43-3.23 0-6.462-.15-9.628-.408a118.37 118.37 0 01-5.178-8.157 111.925 111.925 0 01-4.45-8.544 112.052 112.052 0 014.429-8.565c1.669-2.898 3.38-5.645 5.156-8.2a110.99 110.99 0 019.671-.43c3.23 0 6.462.151 9.628.409a118.435 118.435 0 015.178 8.157 111.961 111.961 0 014.45 8.543 120.334 120.334 0 01-4.429 8.565zm6.911-2.79a92.173 92.173 0 012.953 8.543 95.712 95.712 0 01-8.815 1.717 118.628 118.628 0 003.08-5.087 122.035 122.035 0 002.782-5.173zM52.527 88.668a88.409 88.409 0 01-5.948-6.87c1.925.087 3.894.15 5.884.15 2.01 0 4-.042 5.948-.15a83.708 83.708 0 01-5.884 6.87zM36.608 76.024a96.243 96.243 0 01-8.772-1.695c.792-2.77 1.776-5.625 2.888-8.48a101.795 101.795 0 002.803 5.152 142.206 142.206 0 003.081 5.023zm15.812-44.67a88.388 88.388 0 015.948 6.869c-1.926-.086-3.894-.15-5.884-.15-2.011 0-4.001.042-5.948.15a83.708 83.708 0 015.884-6.87zM36.587 43.997a118.63 118.63 0 00-5.863 10.24 92.242 92.242 0 01-2.952-8.544 103.633 103.633 0 018.815-1.696zM17.224 70.873C9.65 67.63 4.75 63.38 4.75 60.01s4.9-7.642 12.474-10.862c1.84-.794 3.85-1.503 5.926-2.168 1.22 4.207 2.825 8.586 4.814 13.073-1.968 4.465-3.551 8.822-4.75 13.008a64.852 64.852 0 01-5.99-2.19zm11.51 30.674c-2.91-1.674-4.172-8.05-3.187-16.25.235-2.017.62-4.142 1.09-6.31 4.194 1.03 8.773 1.824 13.587 2.34 2.889 3.97 5.884 7.577 8.9 10.732-6.974 6.505-13.521 10.068-17.972 10.068-.963-.022-1.776-.215-2.417-.58zM79.487 85.19c1.005 8.2-.236 14.576-3.124 16.271-.642.387-1.477.559-2.46.559-4.43 0-10.998-3.542-17.973-10.004 2.995-3.155 5.99-6.74 8.836-10.711 4.836-.515 9.414-1.31 13.608-2.361.492 2.168.877 4.25 1.113 6.246zm8.237-14.317c-1.84.794-3.851 1.502-5.927 2.168-1.22-4.208-2.824-8.587-4.814-13.073 1.969-4.465 3.552-8.823 4.75-13.009a67.72 67.72 0 016.012 2.19c7.575 3.241 12.474 7.492 12.474 10.862-.021 3.37-4.92 7.642-12.495 10.861z" />
        <path d="M52.463 69.82c5.4 0 9.777-4.391 9.777-9.81 0-5.417-4.377-9.81-9.777-9.81-5.4 0-9.778 4.393-9.778 9.81 0 5.419 4.377 9.81 9.778 9.81z" />
      </g>
      <defs>
        <clipPath id="clip0_2_24">
          <path fill="#fff" d="M0 0H104.968V120H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

