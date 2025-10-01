import { useState } from 'react';

function NameForm({ onSubmit }) {
    const [playerName, setPlayerName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!playerName.trim()) {
            alert('Vui lòng nhập tên của bạn!');
            return;
        }
        onSubmit(playerName.trim());
    };

    return (
        <div className='center-container'>
            <div className='name-form-wide'>
                <h2>Kéo Búa Bao Game!</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Nhập tên của bạn'
                        value={playerName}
                        onChange={e => setPlayerName(e.target.value)}
                    />
                    <button style={{ marginTop: '1rem' }} type='submit'>Tiếp tục</button>
                </form>
            </div>
        </div>
    );
}

export default NameForm;