import React from 'react'

const CircleComponents = () => {

    const locations = [
        {
            name: "내 주변",
            // image: "../assets/location.svg"
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "용산",
            // image: "./assets/san.svg" 
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "성수",
            // image: "../assets/location.svg"
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "종로",
            // image: "./assets/san.svg" 
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "동대문",
            // image: "../assets/location.svg"
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "잠실",
            // image: "./assets/san.svg" 
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "여의도",
            // image: "../assets/location.svg"
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "홍대",
            // image: "./assets/san.svg" 
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "신사",
            // image: "../assets/location.svg"
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "경복궁",
            // image: "./assets/san.svg" 
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "청담",
            // image: "../assets/location.svg"
            image: 'https://place-hold.it/150x100/666'
        },
        {
            name: "삼성",
            // image: "./assets/san.svg" 
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBQYHBP/EADMQAAEEAQICCAMIAwAAAAAAAAEAAgMRBAUhEjEGEyJBUWFxgRSxwRUkMkJSkaHRI4Lw/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAcEQEAAwEBAQEBAAAAAAAAAAAAAQIRIQMSYVH/2gAMAwEAAhEDEQA/AMu0IjQmaERoQMAqLpBnOH3aM0CO3XyV7M9sMT5Hcmiysc8uyctzn7ue5RMr0jZeeONz3ABpJVriaTmSUY8aRxI22Wy6J6DBGGzSRhzz4hbzDwGBnZaB6BcJ9O8aY8+dcYyNKzcEufJjvMTgCSDyNKsfxQyh7CWuBtrgu85unRmMgsBsbghcx6Y6C3Dk6+AVG49odwSt9nqJpzgOm5jcyAO5PGzh5r1ELM6PKYM3gJ2eK+q1PMBd4ZrRkguCHSO4KFKVU2hEAUWhTaEHg1x/V4J8yFQ6JEJcwOdu1m60OtRdbgvaBZrb1Xg6JQN+0nQyE07YErneXbzb7SpsnHhafs2d7au2FpP7LW6TmRZMQLWPYf0vbRCxP2PrxePgtQ6o8fZPDbeGiOXjdHw2Wtw+OHKiZK/jk4DxH5X51Sz/AK1T/BNS1KOKXqY8fInfW4ijJCzeutGfjSQTYs0JcDwl7dj7qw6QYer5WM12j5LYX32rHPn5HyXlgxc+Nkjc6frYwOyXCne9bKP0iN45Expg1BrH7ObJR/da9g7AVTPpXxGo5mVxEMZL2a8b7/Lu9Srlo7K1VnWT0jJDcEMhGcEOldySaitCG1FagFltuBx8Baq4GuwtZil/IX1f8q6e3iYQeRC8U0RlgsC3jcev/BVmNXpOOqaTK2WBjttwq8Z0cety/EcYBtjeFhoVy381W9G9SD8FvCboIJ6RZ3xUggwHODTRLiFkb60m88a/RsgSRSGjw3+ZtEexVZ0kyBFjSuHKiULR9ZlzA5s2NJC5vO6pVPSrLbIz4dpsv/F5DvSOzil4+N1m84w3jYsO5jcTO5vIyHu86/pTA2QuqbGxrWgABwqvVGWutchjvb6nUHIdIjlBWUOERqE1EagIEOJvCXN87CmE9bgjmFAqNN6Rw4erzNDvuzn1dUAe/wBrXQ9Ni03Nj60hruLe2uXDJuIyycQDXF5sDuNomPl5eMKx8mWNvg15AVLeWzsO9Pb5jHa9Uz8XTmCDHp0r9mRs3cVhtQ1YRatHAC3JlmIEvVvvqzfL5rGvyZ5OLrJnu4tnW7n6+KaGV8MjXwvMb2nsuA5JTy+Z1Hp7fUY6E8WKUu5RY5sjGvYeJrgCD4hSKu4huUFNyhalCDSiNK8GTn4+G0GeSieTQLJ9gqvI6Scxiwf7Sn6D+0xLTAqn1fXocZj4cUiWeqsfhZ795Wby9Ry8zaeZxb+huzf2H1XlpTgTRQoFP6pUnUhJUn2SQWWl6zPgVGR1sH6CeXoVoMfXdPyAP8/VO72yjhr35fysZsmvwTB0FsjJBcb2vHi02ok7rn7SWm2ktPiDRXrZqecxtDKlrzN/NRgDkTvyJnyyG3OPjyHghJJ1IZOkkgSdMnQJJJMgSSSSBJk6ZB//2Q=='
        }
    ]
    return (
        <div className="grid grid-cols-6 gap-4">
            {locations.map(location => (
                <div className='relative text-center'>
                    <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium font-['Inter'] p-4">{location.name}</p>
                    <img className='w-[140px] h-[140px] rounded-[100px]' src={location.image} />
                </div>
            ))}
        </div>
    )
}

export default CircleComponents