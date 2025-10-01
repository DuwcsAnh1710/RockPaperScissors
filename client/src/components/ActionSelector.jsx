function ActionSelector({ playerName, onCreateRoom, onJoinRoom, onBack }) {
    return (
        <div className='center-container'>
            <div className='action-selector-wide'>
                <h2>Xin chào, {playerName}!</h2>
                <div className='action-buttons'>
                    <button
                        className='action-btn create-btn'
                        onClick={onCreateRoom}
                    >
                        Tạo phòng mới
                    </button>
                    <button
                        className='action-btn join-btn'
                        onClick={onJoinRoom}
                    >
                        Vào phòng có sẵn
                    </button>
                </div>
                <button className='back-btn' onClick={onBack}>
                    ← Quay lại
                </button>
            </div>
        </div>
    );
}

export default ActionSelector;