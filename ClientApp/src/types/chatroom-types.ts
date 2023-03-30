export interface ChatroomTypes { 
    _id: string;
    room_name: string;
    created_at: Date;
    updated_at: Date;
    messages: Array<{
        _id: string;
        room_id: string;
        sender_id: string;
        message: string;
        created_at: string;
        updated_at: string;
        
    }>;
}